import { URL_HEADER } from '../constants/constants';

const config = {
  screens: {
    Exercise: 'exercise/:courseId/:classId/:exerciseId',
  },
};

const linking = {
  prefixes: [URL_HEADER],
  config,
};

// const config = {
//   screens: {
//     Practice: {
//       screens: {
//         Class: {
//           screens: {
//             Exercise: 'Practice/:courseId/:classId/:exerciseId',
//           },
//         },
//       },
//     },
//   },
// };

export { linking, config };
