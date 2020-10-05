const fs = require('fs');

const breath = '../exercises/breathExercises.json';
const sensation = '../exercises/sensationExercises.json';
const thought = '../exercises/thoughtExercises.json';
const hear = '../exercises/hearExercises.json';
const see = '../exercises/seeExercises.json';
const sense = '../exercises/senseExercises.json';
const awareness = '../exercises/awarenessExercises.json';
const quote = '../exercises/quoteExercises.json';
const question = '../exercises/questionExercises.json';
const interactive = '../exercises/interactiveExercises.json';

const BREATH_EXERCISE = 'Breath';
const SENSATION_EXERCISE = 'Sensation';
const THOUGHT_EXERCISE = 'Thought';
const HEAR_EXERCISE = 'Hear';
const SEE_EXERCISE = 'See';
const SENSE_EXERCISE = 'Sense';
const SELF_AWARENESS_EXERCISE = 'Awareness';
const QUESTION_EXERCISE = 'Question';
const QUOTE_EXERCISE = 'Quote';
const INTERACTIVE_EXERCISE = 'Interactive';

const COURSE_WRITE_PATH = '../finalCourses/';

const MINDFULNESS_INTRODUCTION = '../courses/mindfulnessIntroduction.json';
const MINDFULNESS_BEGINNER = '../courses/mindfulnessBeginner.json';

const readFile = (file) => {
  const c = fs.readFileSync(file, 'utf8');

  const result = JSON.parse(c);
  return result;
};

function getExerciseFromStorage(eId) {
  if (!eId || eId.length <= 0) return null;
  console.log('eId', eId);
  const parts = eId.split('-');
  let type = parts[0];
  let index = parts[1];

  switch (type) {
    case BREATH_EXERCISE:
      const breathExercises = readFile(breath);
      return breathExercises.exerciseData.data[parseInt(index, 10)];
    case SENSATION_EXERCISE:
      const sensationExercises = readFile(sensation);
      return sensationExercises.exerciseData.data[parseInt(index, 10)];
    case THOUGHT_EXERCISE:
      const thoughtExercises = readFile(thought);
      return thoughtExercises.exerciseData.data[parseInt(index, 10)];
    case HEAR_EXERCISE:
      const hearExercises = readFile(hear);
      return hearExercises.exerciseData.data[parseInt(index, 10)];
    case SEE_EXERCISE:
      const seeExercises = readFile(see);
      return seeExercises.exerciseData.data[parseInt(index, 10)];
    case SENSE_EXERCISE:
      const senseExercises = readFile(sense);
      return senseExercises.exerciseData.data[parseInt(index, 10)];
    case SELF_AWARENESS_EXERCISE:
      const awarenessExercises = readFile(awareness);
      return awarenessExercises.exerciseData.data[parseInt(index, 10)];
    case QUOTE_EXERCISE:
      const quoteExercises = readFile(quote);
      return quoteExercises.exerciseData.data[parseInt(index, 10)];
    case QUESTION_EXERCISE:
      const questionExercises = readFile(question);
      return questionExercises.exerciseData.data[parseInt(index, 10)];
    case INTERACTIVE_EXERCISE:
      const interactiveExercises = readFile(interactive);
      return interactiveExercises.exerciseData.data[parseInt(index, 10)];
    default:
      return null;
  }
}

function convertCourseToJavascript(json) {
  const course = {};
  const classes = [];
  const data = json.exerciseData.data;
  let currentDayId = -1;

  data.forEach((item, index) => {
    let {
      dayId,
      exerciseId,
      image,
      reminderTime,
      exerciseTitle,
      subheading,
      copy,
      instructions,
      hasNext,
      screenType,
    } = item;

    console.log('item', item);

    // grab the exercise from exercise list if it exists
    const exercise = getExerciseFromStorage(exerciseId);
    console.log('exercise', exercise);
    if (exerciseId) {
      exerciseTitle = exercise && exercise.title;
      copy = exercise && exercise.copy;
    }
    const recommendedTime = exercise && exercise.recommendedTime;
    const exerciseType = exercise && exercise.exerciseType;

    // create next day if it exists
    if (typeof dayId == 'number') {
      if (dayId > currentDayId) {
        currentDayId += 1;

        classes.push({
          title: `Day ${dayId.toString()}`,
          exercises: [],
        });
      }
    }

    if (index === 0) {
      // add course information if it is first item
      course.title = item.title;
      course.information = item.information;
    } else {
      // handle normal exercises
      const nextExercise = {};
      nextExercise.title =
        exerciseTitle && exerciseTitle.length > 0 ? exerciseTitle : null;
      nextExercise.subheading =
        subheading && subheading.length > 0 ? subheading : null;
      nextExercise.copy = copy && copy.length > 0 ? copy : null;
      nextExercise.instructions =
        instructions && instructions.length > 0 ? instructions : null;
      nextExercise.hasNext = hasNext || false;
      nextExercise.screenType =
        screenType && screenType.length > 0 ? screenType : null;
      nextExercise.copy = copy && copy.length > 0 ? copy : null;
      nextExercise.image = image && image.length > 0 ? image : null;
      nextExercise.reminderTime =
        reminderTime && reminderTime.length > 0 ? reminderTime : null;
      nextExercise.recommendedTime = recommendedTime;
      nextExercise.exerciseType =
        exerciseType && exerciseType.length > 0 ? exerciseType : null;

      classes[currentDayId].exercises.push(nextExercise);
    }
  });

  course.classes = classes;

  return course;
}

function fileWriteSync(path, content) {
  const options = { encoding: 'utf-8', flag: 'w' };
  fs.writeFileSync(path, content, options);
}

function prepareDataAndWrite(path, dataSet) {
  const result = JSON.stringify(dataSet);
  fileWriteSync(path, result);
}

function generateJsonFile(csvPath, name) {
  const course = convertCourseToJavascript(csvPath);
  prepareDataAndWrite(`${COURSE_WRITE_PATH}${name}.json`, course);
}

function generateFinalCourses() {
  const intro = readFile(`${MINDFULNESS_INTRODUCTION}`);
  const beginner = readFile(`${MINDFULNESS_BEGINNER}`);

  generateJsonFile(intro, 'introCourse');
  generateJsonFile(beginner, 'beginnerCourse');
}

generateFinalCourses();
