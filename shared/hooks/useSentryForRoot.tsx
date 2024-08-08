import * as React from 'react';
import { useNavigationContainerRef } from 'expo-router';
import * as Sentry from '@sentry/react-native';

export default function useSentryForRoot(
  routingInstrumentation: Sentry.ReactNavigationInstrumentation
) {
  const ref = useNavigationContainerRef();

  React.useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
  }, [ref, routingInstrumentation]);
}
