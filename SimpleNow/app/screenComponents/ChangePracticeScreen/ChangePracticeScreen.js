import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { HeaderDefaultBack } from '../../components/HeaderDefaultBack';
import { HeaderSpacer } from '../../components/HeaderSpacer';
import { InvisibleSeparator } from '../../components/InvisibleSeparator';
import PracticeInfoCard from '../../components/PracticeInfoCard/PracticeInfoCard';
import setLocalImage from '../../helpers/setLocalImage';
import { titleFont, whiteFont } from '../../styles/fonts';

import styles from './styles';

const ChangePracticeScreen = ({ background, navigation }) => {
  const renderPracticeInfoCard = (item) => {
    return <PracticeInfoCard practice={item} />;
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.container}
      source={setLocalImage(background)}
    >
      <HeaderSpacer />

      <ScrollView bounces={false}>
        <HeaderDefaultBack
          onPressBack={navigateBack}
          title={'Change Practice'}
        />
        <InvisibleSeparator />
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Mindfulness
          </Text>
          <FlatList
            data={[
              { id: 'Applying Mindfulness' },
              { id: 'Mindfulness Beyond' },
            ]}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.practiceListScrollerContainer}
            renderItem={({ item, index }) => renderPracticeInfoCard(item)}
            removeClippedSubviews
            keyExtractor={(item) => `${item}`}
          />
          <FlatList />
        </View>
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Effortless Meditation
          </Text>
          <FlatList
            data={[{ id: 'Self Examination Deep Dive' }]}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.practiceListScrollerContainer}
            renderItem={({ item, index }) => renderPracticeInfoCard(item)}
            removeClippedSubviews
            keyExtractor={(item) => `${item}`}
          />
          <FlatList />
        </View>
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Integrating Meditation Habits
          </Text>
          <FlatList
            data={[{ id: 'Morning Mind Set' }, { id: 'Always Mindful' }]}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.practiceListScrollerContainer}
            renderItem={({ item, index }) => renderPracticeInfoCard(item)}
            removeClippedSubviews
            keyExtractor={(item) => `${item}`}
          />
          <FlatList />
        </View>
        <View style={styles.practiceCategory}>
          <Text style={[titleFont, whiteFont, styles.textMargin]}>
            Your Presets
          </Text>
          <PracticeInfoCard />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    background: state?.settings?.background || 'background1',
  };
};

export default connect(mapStateToProps)(ChangePracticeScreen);
