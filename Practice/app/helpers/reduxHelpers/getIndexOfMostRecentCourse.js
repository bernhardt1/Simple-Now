import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const getIndexOfMostRecentCourse = (courseId) => {
  try {
    switch (courseId) {
      case 101:
        return 0;
      case 102:
        return 1;
      default:
        return 0;
    }
  } catch (e) {
    sentryCaptureMessage('caught getIndexOfMostRecentCourse error', courseId);
    return '';
  }
};

export default getIndexOfMostRecentCourse;
