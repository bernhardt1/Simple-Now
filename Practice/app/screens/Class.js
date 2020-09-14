import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';

import styles from './screenStyles/ClassStyles';
import DailyExerciseListItem from '../components/DailyExerciseListItem/DailyExerciseListItem';
import isExerciseComplete from '../helpers/isExerciseComplete';
import {INSTRUCTION_EXERCISE_SCREEN} from '../constants/constants';
import isExerciseStillScheduled from '../helpers/reduxHelpers/isExerciseStillScheduled';

const Class = ({navigation, route, reduxAwarenessBeginner}) => {
  const {classInfo, isCourseActivated} = route.params;
  const {classIndex} = classInfo;

  useEffect(() => {
    if (!isCourseActivated) {
      navigation.navigate('Exercise', {
        exercise: classInfo?.exercises[0],
        nextExercise: classInfo?.exercises[1],
        classIndex,
        exerciseIndex: 0,
        screenType: INSTRUCTION_EXERCISE_SCREEN,
      });
    }
  }, []);

  const renderItem = (exercise, index) => {
    return (
      <DailyExerciseListItem
        exercise={exercise}
        nextExercise={
          classInfo?.exercises?.length > index + 1
            ? classInfo?.exercises[index + 1]
            : null
        }
        navigation={navigation}
        classIndex={classIndex}
        exerciseIndex={index}
        isExerciseComplete={isExerciseComplete(
          index,
          classIndex,
          reduxAwarenessBeginner,
        )}
        isExerciseScheduled={isExerciseStillScheduled(
          reduxAwarenessBeginner,
          classIndex,
          index,
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={classInfo?.exercises}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item) => item.title}
        extraData={reduxAwarenessBeginner}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxAwarenessBeginner: state?.awarenessBeginner || {},
  };
};

export default connect(mapStateToProps)(Class);