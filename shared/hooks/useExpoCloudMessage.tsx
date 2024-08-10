import * as React from 'react';

import * as Notifications from 'expo-notifications';
import { useRef, useState } from 'react';
import { registerForPushNotificationsAsync } from '@/shared/functions/requestNotification';
import useExpoNotificationState from '@/states/hooks/useExpoNotificationState';

export default function useExpoCloudMessage() {
  const [expoPushToken, setExpoPushToken] = useExpoNotificationState();
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  React.useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken({ expoToken: token ?? '' }))
      .catch((error) => setExpoPushToken({ expoToken: '' }));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [setExpoPushToken]);

  return { expoPushToken, notification };
}
