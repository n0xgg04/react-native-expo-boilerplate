import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'liqi-news',
  slug: 'liqi-news',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.noxinfinity.liqi.news',
    googleServicesFile: process.env.GOOGLE_SERVICE_IOS,
    entitlements: {
      'aps-environment': 'production',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.noxinfinity.liqi.news',
    googleServicesFile: process.env.GOOGLE_SERVICE_ANDROID,
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    '@prisma/react-native',
    '@react-native-firebase/app',
    [
      '@sentry/react-native/expo',
      {
        organization: 'sentry org slug, or use the `SENTRY_ORG` environment variable',
        project: 'sentry project name, or use the `SENTRY_PROJECT` environment variable',
      },
    ],
    [
      'expo-build-properties',
      {
        ios: {
          newArchEnabled: true,
          useFrameworks: 'static',
        },
        android: {
          newArchEnabled: true,
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '67649653-d0db-4abc-95f5-d70861ea5c19',
    },
  },
  owner: 'noxinfinity',
  runtimeVersion: '1.0.0',
  updates: {
    url: 'https://u.expo.dev/f23475ac-3cca-4d4a-bc18-0dd86f5dede9',
  },
});
