import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Stack from '@/shared/components/base/Stack';
import Typography from '@/shared/components/base/Typography';
import { twMerge } from 'tailwind-merge';
import FontSize from '@/shared/constants/font-scale';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex-col items-center justify-center">
      <Typography variant="h1">Hello world.</Typography>
      <Stack direction="row">
        <Typography>Test</Typography>
        <Typography>Test</Typography>
      </Stack>
      <Link href="/info" className="p-2 bg-gray-200 mt-2 rounded-full overflow-hidden">
        Redirect to info page!
      </Link>
    </SafeAreaView>
  );
}
