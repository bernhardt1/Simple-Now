import getRandomCategory from './getRandomCategory';

const getNextCategoryInPractice = (activePrograms, generatePracticeIndex) => {
  let nextCategory = '';

  if (activePrograms.length <= 0) {
    // get a random new exercise
    nextCategory = getRandomCategory();
  } else {
    nextCategory =
      activePrograms[generatePracticeIndex % activePrograms.length];
  }

  return nextCategory;
};

export default getNextCategoryInPractice;
