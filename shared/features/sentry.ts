import * as Sentry from '@sentry/react-native';

const SentryInit = () => {
  Sentry.init({
    dsn: 'https://244a9cc910683b274326355c3c5fb599@o4507711619661824.ingest.us.sentry.io/4507711622545408',
    tracesSampleRate: 1.0,
    _experiments: {
      profilesSampleRate: 1.0,
    },
  });
};

export { SentryInit };
