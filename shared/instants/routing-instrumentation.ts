import * as Sentry from '@sentry/react-native';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
export { routingInstrumentation };
