import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useSplashState from '@/states/hooks/useSplashState';

export default function useLoadingSplashScreen() {
  const [{ isLoadingSplash }] = useSplashState();
  React.useEffect(() => {
    if (!isLoadingSplash) (async () => SplashScreen.hideAsync())();
  }, [isLoadingSplash]);
}
