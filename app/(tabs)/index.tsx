import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex-col items-center justify-center">
      <Text className="text-2xl text-red-500">Hello world.</Text>
      <Link href="/info" className="p-2 bg-gray-200 mt-2 rounded-full overflow-hidden">
        Redirect to info page!
      </Link>
    </SafeAreaView>
  );
}
