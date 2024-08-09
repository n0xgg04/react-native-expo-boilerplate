import { Stack } from 'expo-router';
import React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import { TanStackQueryProvider, AppThemeProvider } from '@/shared/provider';
import * as Sentry from '@sentry/react-native';
import { useLoadingPackages } from '@/shared/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function RootLayout() {
  const { isLoading } = useLoadingPackages();
  if (isLoading) return null;

  return (
    <GestureHandlerRootView>
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
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(RootLayout);
