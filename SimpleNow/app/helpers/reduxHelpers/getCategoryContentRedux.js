const getCategoryContentRedux = (category, reduxContent) => {
  if (!reduxContent) return {};
  const categoryContent = {};

  for (const [key, value] of Object.entries(reduxContent)) {
    console.log(`${key}: ${value}`);

    if (key.toLocaleUpperCase().includes(category)) {
      category[key] = value;
    }
  }

  return categoryContent;
};

export default getCategoryContentRedux;
