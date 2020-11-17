import {
  BREATH_1_COLOR,
  BREATH_2_COLOR,
  BREATH_3_COLOR,
} from '../../styles/colors';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getProgramCardStyle = (practiceId) => {
  switch (practiceId) {
    case 109:
      return BREATH_1_COLOR;
    case 110:
      return BREATH_2_COLOR;
    case 111:
      return BREATH_3_COLOR;
    case 'Applying Mindfulness':
      return '#123456';
    default:
      return getRandomColor();
  }
};

export default getProgramCardStyle;
