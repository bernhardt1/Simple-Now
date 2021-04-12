import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import {
  useIAP,
  initConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
  InAppPurchase,
  PurchaseError,
  SubscriptionPurchase,
  finishTransaction,
  finishTransactionIOS,
  purchaseErrorListener,
  purchaseUpdatedListener,
  consumePurchaseAndroid,
  acknowledgePurchaseAndroid,
} from 'react-native-iap';

import AppSetup from './AppSetup';

import { API_URL, IAP_SKUS } from '../constants/constants';
import { updatePlanId } from '../actions/settings';

export const IAPContext: React.Context<any> = React.createContext({
  processing: false,
  setProcessing: () => {},
  activePlan: 0,
});

export const useIap = () => React.useContext(IAPContext);

const storePlanAsync = async (planData: any) => {
  const userSettings: any = await AsyncStorage.getItem('user_settings');
  let json = JSON.parse(userSettings);
  json.plan = planData;
  await AsyncStorage.setItem('user_settings', JSON.stringify(json));
};

export const IAPManagerWrapped = ({
  children,
  planId,
  reduxUpdatePlanId,
  initialNotification,
}) => {
  const [processing, setProcessing] = useState(false);
  const purchaseUpdateSubscription = useRef(null);
  const purchaseErrorSubscription = useRef(null);

  const {
    connected,
    products,
    subscriptions,
    getProducts,
    getSubscriptions,
    finishTransaction,
    currentPurchase,
    currentPurchaseError,
  } = useIAP();

  useEffect(() => {
    console.log('products', products);
    console.log('subscriptions', subscriptions);
  }, [products, subscriptions]);

  useEffect(() => {
    getProducts();
    getSubscriptions(IAP_SKUS);
    // initConnection().then((res) => {
    //   console.log('res', res);
    //   // we make sure that "ghost" pending payment are removed
    //   // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)
    //   flushFailedPurchasesCachedAsPendingAndroid()
    //     .catch(() => {
    //       // exception can happen here if:
    //       // - there are pending purchases that are still pending (we can't consume a pending purchase)
    //       // in any case, you might not want to do anything special with the error
    //     })
    //     .then(() => {
    //       this.purchaseUpdateSubscription = purchaseUpdatedListener(
    //         (
    //           purchase: InAppPurchase | SubscriptionPurchase | ProductPurchase
    //         ) => {
    //           console.log('purchaseUpdatedListener', purchase);
    //           const receipt = purchase.transactionReceipt;
    //           if (receipt) {
    //             async (deliveryResult) => {
    //               if (deliveryResult) {
    //                 console.log('deliveryResult', deliveryResult);
    //                 // Tell the store that you have delivered what has been paid for.
    //                 // Failure to do this will result in the purchase being refunded on Android and
    //                 // the purchase event will reappear on every relaunch of the app until you succeed
    //                 // in doing the below. It will also be impossible for the user to purchase consumables
    //                 // again until you do this.
    //                 if (Platform.OS === 'ios') {
    //                   await finishTransactionIOS(purchase.transactionId);
    //                 } else if (Platform.OS === 'android') {
    //                   // If consumable (can be purchased again)
    //                   await consumePurchaseAndroid(purchase.purchaseToken);
    //                   // If not consumable
    //                   await acknowledgePurchaseAndroid(purchase.purchaseToken);
    //                 }

    //                 // From react-native-iap@4.1.0 you can simplify above `method`. Try to wrap the statement with `try` and `catch` to also grab the `error` message.
    //                 // If consumable (can be purchased again)
    //                 await finishTransaction(purchase, true);
    //                 // If not consumable
    //                 await finishTransaction(purchase, false);
    //               } else {
    //                 // Retry / conclude the purchase is fraudulent, etc...
    //               }
    //             };
    //           }
    //         }
    //       );

    //       this.purchaseErrorSubscription = purchaseErrorListener(
    //         (error: PurchaseError) => {
    //           console.warn('purchaseErrorListener', error);
    //         }
    //       );
    //     });
    // });
  }, [getProducts, getSubscriptions]);

  useEffect(() => {
    purchaseUpdateSubscription.current = purchaseUpdatedListener(
      async (purchase) => {
        console.log('purchase', purchase);
        const receipt = purchase.transactionReceipt;

        if (receipt) {
          try {
            if (Platform.OS === 'ios') {
              finishTransactionIOS(purchase.transactionId);
            }
            await finishTransaction(purchase);
            await processNewPurchase(purchase);
          } catch (ackErr) {
            console.log('ackErr', ackErr);
          }
        }
      }
    );

    purchaseErrorSubscription.current = purchaseErrorListener(
      (error: PurchaseError) => {
        console.log('purchaseErrorListener', error);
      }
    );

    return () => {
      if (purchaseUpdateSubscription.current) {
        purchaseUpdateSubscription.current.remove();
        purchaseUpdateSubscription.current = null;
      }
      if (purchaseErrorSubscription.current) {
        purchaseErrorSubscription.current.remove();
        purchaseErrorSubscription.current = null;
      }
    };
  }, []);

  const processNewPurchase = async (purchase) => {
    const { productId, transactionReceipt } = purchase;

    console.log('productId', productId);
    console.log('transactionReceipt', transactionReceipt);

    if (transactionReceipt !== undefined) {
      fetch(API_URL + '/validate-transaction', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          receipt: transactionReceipt,
          productId: productId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          if (data.ack === 'success') {
            storePlanAsync({ planId: productId });
            reduxUpdatePlanId(planId);
          }
        })
        .catch((e) => {
          setProcessing(false);
        });
    }
  };

  return (
    <IAPContext.Provider
      value={{
        processing: processing,
        setProcessing: setProcessing,
        activePlan: planId,
      }}
    >
      <AppSetup initialNotification={initialNotification} />
    </IAPContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    planId: state.settings.planId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxUpdatePlanId: (val) => dispatch(updatePlanId(val)),
  };
};

const IAPManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(IAPManagerWrapped);

export default IAPManager;
