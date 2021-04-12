import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { requestSubscription } from 'react-native-iap';

import { useIap } from '../../setup/IAPManager';

import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import { StandardImageButton } from '../../components/StandardImageButton';
import setLocalImage from '../../helpers/setLocalImage';
import {
  BACKGROUND_GRADIENT_2,
  BRAND_ORANGE,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import {
  bigTitleFont,
  bodyFontThin,
  captionFont,
  centerAlign,
  footnoteFont,
  footnoteThin,
  titleFont,
  whiteFont,
} from '../../styles/fonts';
import { scrollViewBottomMargin } from '../../styles/spacings';
import {
  bottomButton,
  subscriptionInformativeButton,
} from '../../styles/standardComponents';

import styles from './styles';

const ChangePracticeScreen = ({
  background,
  navigation,
  reduxRemoveProgram,
}) => {
  const { processing, setProcessing } = useIap();

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleSubscription = async (selectedPlan) => {
    try {
      setProcessing(true);
      await requestSubscription(selectedPlan, false);
    } catch (err) {
      setProcessing(false);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage('mountain')}
    >
      <View style={styles.headerSpacing} pointerEvents={'auto'} />
      <View style={styles.containerHeader} pointerEvents={'auto'}>
        <StandardImageButton image={'xWhite'} onPress={navigation.goBack} />
      </View>

      <LinearGradient
        style={styles.container}
        colors={[
          '#00000000',
          '#00000000',
          '#555555aa',
          '#555555ff',
          BACKGROUND_GRADIENT_2,
        ]}
      >
        <ScrollView style={styles.scrollView}>
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <InvisibleSeparator />
          <Text
            style={[
              bigTitleFont,
              whiteFont,
              centerAlign,
              { marginHorizontal: widthUnit * 6 },
            ]}
          >
            {'Try Simple Now Plus for free'}
          </Text>
          <InvisibleSeparator />

          <View style={styles.checkItemRow}>
            <Image
              source={setLocalImage('checkWhite')}
              style={styles.checkImage}
            />
            <Text style={[bodyFontThin, whiteFont, centerAlign]}>
              {'Unlock the full Simple Now experience'}
            </Text>
          </View>
          <View style={styles.checkItemRow}>
            <Image
              source={setLocalImage('checkWhite')}
              style={styles.checkImage}
            />
            <Text style={[bodyFontThin, whiteFont, centerAlign]}>
              {'Access all mindfulness content'}
            </Text>
          </View>
          <View style={styles.checkItemRow}>
            <Image
              source={setLocalImage('checkWhite')}
              style={styles.checkImage}
            />
            <Text style={[bodyFontThin, whiteFont, centerAlign]}>
              {'Continue beyond the beginner exercises'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={{ marginTop: widthUnit * 2 }}
          >
            <View
              style={[
                styles.textContainer,
                subscriptionInformativeButton,
                { backgroundColor: BRAND_ORANGE },
              ]}
            >
              <Text style={[footnoteFont, whiteFont]}>
                {'Annual - first 14 days free'}
              </Text>
              <Text style={[footnoteFont, whiteFont]}>
                {'CA$2.50/month, billed yearly at CA$29.99'}
              </Text>
            </View>
            <View style={styles.subscriptionButtonBadge}>
              <Text style={[footnoteThin, whiteFont, centerAlign]}>
                {'BEST VALUE'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={{ marginTop: widthUnit * 2 }}
          >
            <View style={[styles.textContainer, subscriptionInformativeButton]}>
              <Text style={[footnoteFont, whiteFont]}>
                {'Monthly - first 7 days free'}
              </Text>
              <Text style={[footnoteFont, whiteFont]}>{'CA$5.99/month'}</Text>
            </View>
          </TouchableOpacity>

          <Text
            style={[
              captionFont,
              whiteFont,
              centerAlign,
              { marginTop: widthUnit * 4 },
            ]}
          >
            {
              'After free trial, annual subscription is CA$29.99 and automatically renews each year and monthly subscription is CA$5.99 and automatically renews each month. If you subscribe before your free trial ends, the rest of your free trial period will be forfeited as soon as your purchase is confirmed. Eligible for new users only.'
            }
          </Text>

          <TouchableOpacity
            onPress={() => handleSubscription('1MONTH')}
            activeOpacity={0.7}
            style={{ marginTop: widthUnit * 2 }}
          >
            <View
              style={[
                styles.textContainer,
                bottomButton,
                { backgroundColor: VERY_DARK_OVERLAY },
                { marginTop: widthUnit * 4, marginHorizontal: widthUnit * 6 },
              ]}
            >
              <Text style={[titleFont, whiteFont]}>
                {'Try free and subscribe'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={scrollViewBottomMargin} />
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(ChangePracticeScreen);
