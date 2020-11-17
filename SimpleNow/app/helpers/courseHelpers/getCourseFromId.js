import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';
import {
  MINDFULNESS_101,
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
  BREATH_1,
  BREATH_2,
  BREATH_3,
} from '../../assets/courses/finalCourses/index';

// this function accepts a string and returns the local image with a matching name.
const getCourseFromId = (courseId) => {
  try {
    switch (courseId) {
      case 100 || '100':
        return MINDFULNESS_101;
      case 101 || '101':
        return MINDFULNESS_INTRO;
      case 102 || '102':
        return MINDFULNESS_BEGINNER;

      case 109 || '109':
        return BREATH_1;
      case 110 || '110':
        return BREATH_2;
      case 111 || '111':
        return BREATH_3;
      default:
        return MINDFULNESS_INTRO;
    }
  } catch (e) {
    sentryCaptureMessage('caught getCourseFromId error', courseId);
    return '';
  }
};

export default getCourseFromId;
