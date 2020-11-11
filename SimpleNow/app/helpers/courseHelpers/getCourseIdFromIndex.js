import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';
import {
  MINDFULNESS_101,
  MINDFULNESS_INTRO,
  MINDFULNESS_BEGINNER,
} from '../../assets/courses/finalCourses/index';

// this function accepts a string and returns the local image with a matching name.
const getCourseIdFromIndex = (courseIndex) => {
  try {
    switch (courseIndex) {
      case 0:
        return MINDFULNESS_101?.id;
      case 1:
        return MINDFULNESS_INTRO?.id;
      case 2:
        return MINDFULNESS_BEGINNER?.id;
      default:
        return MINDFULNESS_101?.id;
    }
  } catch (e) {
    sentryCaptureMessage('caught getCourseIdFromIndex error', courseIndex);
    return '';
  }
};

export default getCourseIdFromIndex;
