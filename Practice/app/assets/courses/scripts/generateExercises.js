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
