import {
  AWARENESS_1_COLOR,
  AWARENESS_2_COLOR,
  BREATH_1_COLOR,
  BREATH_2_COLOR,
  HEAR_1_COLOR,
  HEAR_2_COLOR,
  INTERACT_1_COLOR,
  INTERACT_2_COLOR,
  QUESTION_1_COLOR,
  QUESTION_2_COLOR,
  QUOTE_1_COLOR,
  QUOTE_2_COLOR,
  SEE_1_COLOR,
  SEE_2_COLOR,
  SENSATION_1_COLOR,
  SENSATION_2_COLOR,
  SENSE_1_COLOR,
  SENSE_2_COLOR,
  THINK_1_COLOR,
  THINK_2_COLOR,
} from '../../styles/colors';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getCategoryCardColors = (category) => {
  switch (category) {
    case 'breath':
      return [BREATH_1_COLOR, BREATH_2_COLOR];
    case 'sensation':
      return [SENSATION_1_COLOR, SENSATION_2_COLOR];
    case 'thought':
      return [THINK_1_COLOR, THINK_2_COLOR];
    case 'hear':
      return [HEAR_1_COLOR, HEAR_2_COLOR];
    case 'see':
      return [SEE_1_COLOR, SEE_2_COLOR];
    case 'sense':
      return [SENSE_1_COLOR, SENSE_2_COLOR];
    case 'awareness':
      return [AWARENESS_1_COLOR, AWARENESS_2_COLOR];
    case 'quote':
      return [QUOTE_1_COLOR, QUOTE_2_COLOR];
    case 'question':
      return [QUESTION_1_COLOR, QUESTION_2_COLOR];
    case 'interactive':
      return [INTERACT_1_COLOR, INTERACT_2_COLOR];
    case 'everything':
      return [
        BREATH_2_COLOR,
        HEAR_1_COLOR,
        QUESTION_1_COLOR,
        AWARENESS_2_COLOR,
      ];
    default:
      return [getRandomColor(), getRandomColor()];
  }
};

export default getCategoryCardColors;
