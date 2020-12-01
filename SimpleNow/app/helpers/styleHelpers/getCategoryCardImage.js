const getCategoryCardImage = (category) => {
  const switchVal = `${category}`;
  const val = switchVal.toLowerCase();

  switch (val) {
    case 'breath':
      return 'mountain';
    case 'sensation':
      return 'water';
    case 'hear':
      return 'forest';
    case 'see':
      return 'desert';
    case 'sense':
      return 'tree';
    case 'thought':
      return 'cloud';
    case 'awareness':
      return 'space';
    case 'quote':
      return 'animal';
    case 'question':
      return 'buddha';
    case 'interactive':
      return 'people';
    default:
      return '';
  }
};

export default getCategoryCardImage;
