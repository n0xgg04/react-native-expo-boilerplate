import { useLoadFontFamily, useSentryForRoot } from '@/shared/hooks';
import { routingInstrumentation } from '@/shared/instants';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SentryInit } from '@/shared/features/sentry';
import * as Notifications from 'expo-notifications';
import useExpoCloudMessage from '@/shared/hooks/useExpoCloudMessage';

SentryInit(routingInstrumentation);
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

(async () => SplashScreen.preventAutoHideAsync())();

export function useLoadingPackages() {
  const { isLoading } = useLoadFontFamily();
  const { expoPushToken } = useExpoCloudMessage();
  useSentryForRoot(routingInstrumentation);

  React.useEffect(() => {
    console.log('[Expo Notification Token] ', expoPushToken);
  }, [expoPushToken]);

  React.useEffect(() => {
    if (!isLoading) (async () => SplashScreen.hideAsync())();
  }, [isLoading]);

  return { isLoading };
}
