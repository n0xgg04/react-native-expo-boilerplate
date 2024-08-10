import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Card, Typography, Stack, Button } from '@/shared/components/base';

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
      <Card>
        <Card.CardHeader>
          <Typography>Test</Typography>
        </Card.CardHeader>
        <Card.CardFooter direction="column">
          <Typography>HI</Typography>
          <Button>Click here</Button>
        </Card.CardFooter>
      </Card>
    </SafeAreaView>
  );
}
