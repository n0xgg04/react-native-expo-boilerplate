import { useFonts } from 'expo-font';

export default function useLoadFontFamily() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return { isLoading: !loaded };
}
