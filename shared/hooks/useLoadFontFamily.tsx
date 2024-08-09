import { useFonts } from 'expo-font';

export function useLoadFontFamily() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return { isLoading: !loaded };
}
