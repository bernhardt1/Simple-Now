import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './screenStyles/PracticeStyles';
import CourseItem from '../components/CourseItem/CourseItem';
import {attentionBeginner} from '../assets/courses';
import {DayItem} from '../components/DayItem';
import {Separator} from '../components/Separator';
import {screenWidth} from '../styles/constants';
import {islandCarouselItem} from '../styles/standardComponents';
import {CLASS_SCREEN, ABOUT_CLASS} from '../constants/constants';

const Practice = ({x, navigation}) => {
  const renderCarouselItem = (item) => {
    return (
      <DayItem
        courseTitle={attentionBeginner.title}
        classInfo={item}
        onPress={() =>
          navigation.navigate('Day', {
            classInfo: {
              ...item,
            },
            courseTitle: attentionBeginner?.title,
            screenType: CLASS_SCREEN,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <CourseItem
        title={attentionBeginner?.title}
        subheading={`${x} of ${attentionBeginner?.days?.length} complete`}
        onPress={() =>
          navigation.navigate('AboutCourse', {
            courseInfo: {
              courseTitle: attentionBeginner?.title,
              courseLength: attentionBeginner?.days?.length,
              courseInformation: attentionBeginner?.information,
            },
            screenType: ABOUT_CLASS,
          })
        }
      />
      <Separator />
      <View style={{flex: 3}}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={attentionBeginner?.days}
          renderItem={({item, index}) => renderCarouselItem(item)}
          sliderWidth={screenWidth}
          itemWidth={islandCarouselItem.width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          layoutCardOffset={10}
        />
      </View>
    </View>
  );
};

export default Practice;
