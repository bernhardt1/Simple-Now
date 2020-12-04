const fs = require('fs');
const Papa = require('papaparse');

const LOCAL_WRITE_PATH = '../exercises/';

const BREATH = 'breath';
const SENSATION = 'sensation';
const THOUGHT = 'thought';
const HEAR = 'hear';
const SEE = 'see';
const SENSE = 'sense';
const AWARENESS = 'awareness';
const QUOTE = 'quote';
const QUESTION = 'question';
const INTERACTIVE = 'interactive';

const BREATH_DESCRIPTION =
  'The Breath category contains simple breathing exercises that encourage mindfulness.';
const SENSATION_DESCRIPTION =
  "Include the Sensation category in your practice to become more mindful of your body and it's stream of sensations.";
const HEAR_DESCRIPTION =
  'The Hear category encourages you to broaden your practice by becoming mindful of the sounds around you.';
const SEE_DESCRIPTION =
  'The exercises in the See category explore the relationship between self and environment by directing your attention outwards.';
const THOUGHT_DESCRIPTION =
  'Include the Thought category in your practice to become more mindful of your stream of thoughts and observe their flow.';
const SENSE_DESCRIPTION =
  'Include the Sense category in your practice to explore the intermingling of your senses and environment.';
const AWARENESS_DESCRIPTION =
  'The exercises in the Awareness category will encourage you to reflect upon the self you identify with.';
const QUOTE_DESCRIPTION =
  'The Quote category contains quotes from mindfulness experts for you to reflect upon.';
const QUESTION_DESCRIPTION =
  'The Question category contains questions posited by spiritual leaders and thinkers for you to reflect upon.';
const INTERACTIVE_DESCRIPTION =
  'The Interactive category contains real world exercises inspired by spiritual leaders and thinkers that will put your mindfulness into practice.';

const BREATH_CSV = `./rawExercises/${BREATH}Exercises.csv`;
const SENSATION_CSV = `./rawExercises/${SENSATION}Exercises.csv`;
const THOUGHT_CSV = `./rawExercises/${THOUGHT}Exercises.csv`;
const HEAR_CSV = `./rawExercises/${HEAR}Exercises.csv`;
const SEE_CSV = `./rawExercises/${SEE}Exercises.csv`;
const SENSE_CSV = `./rawExercises/${SENSE}Exercises.csv`;
const AWARENESS_CSV = `./rawExercises/${AWARENESS}Exercises.csv`;
const QUOTE_CSV = `./rawExercises/${QUOTE}Exercises.csv`;
const QUESTION_CSV = `./rawExercises/${QUESTION}Exercises.csv`;
const INTERACTIVE_CSV = `./rawExercises/${INTERACTIVE}Exercises.csv`;

const getExerciseTypeDescription = (type) => {
  switch (type) {
    case BREATH:
      return BREATH_DESCRIPTION;
    case SENSATION:
      return SENSATION_DESCRIPTION;
    case THOUGHT:
      return THOUGHT_DESCRIPTION;
    case HEAR:
      return HEAR_DESCRIPTION;
    case SEE:
      return SEE_DESCRIPTION;
    case SENSE:
      return SENSE_DESCRIPTION;
    case AWARENESS:
      return AWARENESS_DESCRIPTION;
    case QUOTE:
      return QUOTE_DESCRIPTION;
    case QUESTION:
      return QUESTION_DESCRIPTION;
    case INTERACTIVE:
      return INTERACTIVE_DESCRIPTION;
    default:
      return '';
  }
};

const parseCsv = (file) => {
  const c = fs.readFileSync(file, 'utf8');

  const promise = new Promise((resolve, reject) => {
    try {
      Papa.parse(c, {
        complete: function (results) {
          resolve(results);
        },
        header: true,
      });
    } catch (error) {
      reject(error);
    }
  });

  return promise;
};

function fileWriteSync(path, content) {
  const options = { encoding: 'utf-8', flag: 'w' };
  fs.writeFileSync(path, content, options);
}

function prepareDataAndWrite(path, dataSet) {
  const request = {
    exerciseData: dataSet,
  };

  const result = JSON.stringify(request);
  fileWriteSync(path, result);
}

function generateJsonFile(csvPath, name) {
  const promise = parseCsv(csvPath);

  promise
    .then((result) => {
      if (result && result.data) {
        result.data.forEach((item) => {
          if (item && item.recommendedTime) {
            item.recommendedTime = parseInt(item.recommendedTime, 10);
          }
        });
      }
      console.log('result', result);

      result.type = name;
      result.description = getExerciseTypeDescription(name);

      prepareDataAndWrite(`${LOCAL_WRITE_PATH}${name}Exercises.json`, result);
    })
    .catch((e) => {
      console.log('e', e);
    });
}

async function generateJsonFiles() {
  generateJsonFile(BREATH_CSV, BREATH);
  generateJsonFile(SENSATION_CSV, SENSATION);
  generateJsonFile(THOUGHT_CSV, THOUGHT);
  generateJsonFile(HEAR_CSV, HEAR);
  generateJsonFile(SEE_CSV, SEE);
  generateJsonFile(SENSE_CSV, SENSE);
  generateJsonFile(AWARENESS_CSV, AWARENESS);
  generateJsonFile(QUOTE_CSV, QUOTE);
  generateJsonFile(QUESTION_CSV, QUESTION);
  generateJsonFile(INTERACTIVE_CSV, INTERACTIVE);
}

generateJsonFiles();
