import * as Sentry from '@sentry/react-native';

const sentryCaptureMessage = (e, params) => {
  Sentry.withScope((scope) => {
    scope.setExtra('params', params);
    scope.setLevel('info');
    Sentry.captureMessage(e);
  });
};

export default sentryCaptureMessage;
