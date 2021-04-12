import {
  ANALYTICS_AWARENESS,
  ANALYTICS_BREATH,
  ANALYTICS_HEAR,
  ANALYTICS_QUESTION,
  ANALYTICS_SEE,
  ANALYTICS_SENSATION,
  ANALYTICS_SENSE,
  ANALYTICS_THOUGHT,
} from './constants';

// this function accepts a string and returns the local image with a matching name.
const getCategoryGroupId = (category) => {
  switch (category) {
    case 'breath':
      return ANALYTICS_BREATH;
    case 'sensation':
      return ANALYTICS_SENSATION;
    case 'thought':
      return ANALYTICS_THOUGHT;
    case 'hear':
      return ANALYTICS_HEAR;
    case 'see':
      return ANALYTICS_SEE;
    case 'sense':
      return ANALYTICS_SENSE;
    case 'awareness':
      return ANALYTICS_AWARENESS;
    case 'question':
      return ANALYTICS_QUESTION;

    default:
      return '';
  }
};

export default getCategoryGroupId;
