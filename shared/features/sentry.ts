import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';

const SentryInit = (routingInstrumentation: Sentry.ReactNavigationInstrumentation) => {
  Sentry.init({
    dsn: 'https://244a9cc910683b274326355c3c5fb599@o4507711619661824.ingest.us.sentry.io/4507711622545408',
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
