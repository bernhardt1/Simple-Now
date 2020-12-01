import {
  breath,
  sensation,
  thought,
  hear,
  see,
  sense,
  awareness,
  quote,
  question,
  interactive,
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
    case 'quote':
      return quote;
    case 'question':
      return question;
    case 'interactive':
      return interactive;

    default:
      return {};
  }
};

export default getCategoryContent;
