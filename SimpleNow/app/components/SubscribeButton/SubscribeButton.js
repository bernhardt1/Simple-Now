import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { requestSubscription } from 'react-native-iap';
import { useIap } from '../../config/IAPManager';
import { footnoteFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

const SubscribeButton = ({}) => {
  // fetch values from context
  const { processing, setProcessing } = useIap();

  // handle new subscription request
  const handleSubscription = async (selectedPlan) => {
    try {
      setProcessing(true);
      await requestSubscription(selectedPlan, false);
    } catch (err) {
      setProcessing(false);
    }
  };

  // configure subscribe button based on processing state
  return (
    <TouchableOpacity
      onPress={() => handleSubscription('1MONTH')}
      activeOpacity={0.7}
      disabled={processing}
    >
      <View
        style={
          [
            //   styles.textContainer,
            //   standardSettingButton,
            //   withBorder
            //     ? { borderColor: BRAND_WHITE, borderWidth: BORDER_WIDTH }
            //     : {},
          ]
        }
      >
        <Text style={[footnoteFont, whiteFont]}>
          {processing ? `Transaction Processing...` : `Subscribe!`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubscribeButton;
