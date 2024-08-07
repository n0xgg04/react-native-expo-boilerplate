import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import TanStackQueryProvider from '@/shared/provider/TanStackQueryProvider';
import * as Sentry from '@sentry/react-native';
import { SentryInit } from '@/shared/features/sentry';
import AppThemeProvider from '@/shared/provider/ThemeProvider';
import useLoadFontFamily from '@/shared/hooks/useLoadFontFamily';

(async () => SplashScreen.preventAutoHideAsync())();

SentryInit();
function RootLayout() {
  const { isLoading } = useLoadFontFamily();

  React.useEffect(() => {
    if (!isLoading) (async () => SplashScreen.hideAsync())();
  }, [isLoading]);

  if (isLoading) return null;

  return (
    <RecoilRoot>
      <TanStackQueryProvider>
        <AppThemeProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="info" />
          </Stack>
        </AppThemeProvider>
      </TanStackQueryProvider>
    </RecoilRoot>
  );
}

export default Sentry.wrap(RootLayout);
