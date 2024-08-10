import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';

const SentryInit = (routingInstrumentation: Sentry.ReactNavigationInstrumentation) => {
  Sentry.init({
    dsn: process.env.SENTRY_DNS,
    debug: true,
    integrations: [
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
        enableNativeFramesTracking: !isRunningInExpoGo(),
      }),
    ],
  });
};

export { SentryInit };
