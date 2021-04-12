import {
  breath,
  sensation,
  thought,
  hear,
  see,
  sense,
  awareness,
  question,
} from '../../assets/courses/exercises/index';

// this function accepts a string and returns the local image with a matching name.
const getCategoryContent = (category) => {
  switch (category) {
    case 'breath':
      return breath;
    case 'sensation':
      return sensation;
    case 'thought':
      return thought;
    case 'hear':
      return hear;
    case 'see':
      return see;
    case 'sense':
      return sense;
    case 'awareness':
      return awareness;
    case 'question':
      return question;

    default:
      return {};
  }
};

export default getCategoryContent;
