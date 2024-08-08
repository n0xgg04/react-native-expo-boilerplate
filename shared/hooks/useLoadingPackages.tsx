import useLoadFontFamily from '@/shared/hooks/useLoadFontFamily';
import useSentryForRoot from '@/shared/hooks/useSentryForRoot';
import { routingInstrumentation } from '@/shared/instants';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SentryInit } from '@/shared/features/sentry';
import useInitializePrisma from '@/shared/hooks/useInitializePrisma';

SentryInit(routingInstrumentation);
(async () => SplashScreen.preventAutoHideAsync())();

export default function useLoadingPackages() {
  const { isLoading } = useLoadFontFamily();
  //const { isInitialized } = useInitializePrisma();

  // const isLoading = React.useMemo(
  //   () => !isLoadingFont && isInitialized,
  //   [isInitialized, isLoadingFont]
  // );

  useSentryForRoot(routingInstrumentation);

  React.useEffect(() => {
    if (!isLoading) (async () => SplashScreen.hideAsync())();
  }, [isLoading]);

  return { isLoading };
}
