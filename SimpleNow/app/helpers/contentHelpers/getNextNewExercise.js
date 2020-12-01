import getRandomExerciseFromCategory from './getRandomExerciseFromCategory';

const getNextNewExerciseFromCategory = (
  categoryContent,
  reduxCategoryContent,
  activeExercises,
  category
) => {
  if (!reduxCategoryContent) return null;

  let count = 0;

  while (count < categoryContent?.length) {
    const content = categoryContent[count];
    let skip = false;

    activeExercises.forEach((e) => {
      if (e?.id === content?.id) {
        skip = true;
      }
    });

    for (const [key, value] of Object.entries(reduxCategoryContent)) {
      if (key.toLowerCase().includes(content?.id?.toLowerCase())) {
        skip = true;
      }
    }

    if (skip) {
      count++;
    } else {
      return content;
    }
  }

  return getRandomExerciseFromCategory(category);
};

export default getNextNewExerciseFromCategory;
