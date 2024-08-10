import * as React from 'react';
import { Stack } from '@/shared/components/base/Stack';

export function CardHeader({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof Stack>>) {
  return (
    <Stack direction="row" {...props}>
      {children}
    </Stack>
  );
}
