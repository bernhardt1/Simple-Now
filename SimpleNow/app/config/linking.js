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
//     Home: {
//       screens: {
//         Class: {
//           screens: {
//             Exercise: 'Home/:courseId/:classId/:exerciseId',
//           },
//         },
//       },
//     },
//   },
// };

export { linking, config };
