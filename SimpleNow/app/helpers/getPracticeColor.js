function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getPracticeColor = (practiceId) => {
  switch (practiceId) {
    case 'Applying Mindfulness':
      return '#123456';
    default:
      return getRandomColor();
  }
};

export default getPracticeColor;
