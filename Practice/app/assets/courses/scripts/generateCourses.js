const fs = require('fs');
const Papa = require('papaparse');

const LOCAL_WRITE_PATH = '../courses/';

const MINDFULNESS_INTRODUCTION_CSV = `./rawCourses/mindfulnessIntroduction.csv`;
const MINDFULNESS_BEGINNER_CSV = `./rawCourses/mindfulnessBeginner.csv`;

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
      result.data.forEach((item) => {
        if (item.dayId && item.dayId.length > 0) {
          item.dayId = parseInt(item.dayId, 10);
        }

        if (item.hasNext && item.hasNext.length > 0) {
          item.hasNext = item.hasNext == 'TRUE' || item.hasNext == 'true';
        }
      });

      console.log('result', result);
      prepareDataAndWrite(`${LOCAL_WRITE_PATH}${name}.json`, result);
    })
    .catch((e) => {
      console.log('e', e);
    });
}

async function generateJsonFiles() {
  generateJsonFile(MINDFULNESS_INTRODUCTION_CSV, 'mindfulnessIntroduction');
  generateJsonFile(MINDFULNESS_BEGINNER_CSV, 'mindfulnessBeginner');
}

generateJsonFiles();
