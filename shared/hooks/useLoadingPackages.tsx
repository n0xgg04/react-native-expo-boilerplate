import { useLoadFontFamily, useSentryForRoot } from '@/shared/hooks';
import { routingInstrumentation } from '@/shared/instants';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SentryInit } from '@/shared/features/sentry';

SentryInit(routingInstrumentation);
(async () => SplashScreen.preventAutoHideAsync())();

export function useLoadingPackages() {
  const { isLoading } = useLoadFontFamily();

  useSentryForRoot(routingInstrumentation);

  React.useEffect(() => {
    if (!isLoading) (async () => SplashScreen.hideAsync())();
  }, [isLoading]);

  return { isLoading };
}
