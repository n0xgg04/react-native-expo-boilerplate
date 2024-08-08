import { Stack } from 'expo-router';
import React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import TanStackQueryProvider from '@/shared/provider/TanStackQueryProvider';
import * as Sentry from '@sentry/react-native';
import AppThemeProvider from '@/shared/provider/ThemeProvider';
import useLoadingPackages from '@/shared/hooks/useLoadingPackages';

function RootLayout() {
  const { isLoading } = useLoadingPackages();
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
