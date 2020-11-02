import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';
import {
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
} from '../../assets/courses/finalCourses/index';

// this function accepts a string and returns the local image with a matching name.
const getCourseFromId = (courseId) => {
  try {
    switch (courseId) {
      case 101 || '101':
        return MINDFULNESS_INTRO;
      case 102 || '102':
        return MINDFULNESS_BEGINNER;
      default:
        return MINDFULNESS_INTRO;
    }
  } catch (e) {
    sentryCaptureMessage('caught getCourseFromId error', courseId);
    return '';
  }
};

export default getCourseFromId;
