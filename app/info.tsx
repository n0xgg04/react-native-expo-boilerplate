import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'moti';

export default function Info() {
  return (
    <SafeAreaView className="flex-1 flex flex-col items-center justify-center">
      <Text>This is a info page</Text>
    </SafeAreaView>
  );
}
