import * as React from 'react';
import { FlashList } from '@shopify/flash-list';

type Props = React.ComponentProps<typeof FlashList>;

export default function List(props: Props) {
  return <FlashList {...props} />;
}
