const getCategoryContentRedux = (category, reduxContent) => {
  if (!reduxContent) return {};
  const categoryContent = {};

  for (const [key, value] of Object.entries(reduxContent)) {
    if (key?.toLowerCase().includes(category?.toLowerCase())) {
      categoryContent[key] = value;
    }
  }

  return categoryContent;
};

export default getCategoryContentRedux;
