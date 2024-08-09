import * as React from 'react';
import { Image as ExpoImage } from 'expo-image';

type Props = React.ComponentProps<typeof ExpoImage>;

export function Image({ ...props }: Props) {
  return <ExpoImage {...props} />;
}
