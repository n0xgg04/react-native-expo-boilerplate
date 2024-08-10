import * as React from 'react';
import { Stack } from '@/shared/components/base/Stack';
import { Spacing } from '@/shared/constants/spacing';
import { cn } from '@/shared/utils';

type Props = {
  insetPadding?: number;
  borderRadius?: number;
};

export function Card({
  children,
  insetPadding = Spacing.SPACING_20,
  className,
  style,
  borderRadius = Spacing.SPACING_8,
  ...props
}: React.PropsWithChildren<Props & React.ComponentProps<typeof Stack>>) {
  return (
    <Stack
      style={[
        {
          padding: insetPadding,
          overflow: 'hidden',
          borderRadius,
        },
        style,
      ]}
      direction="column"
      className={cn('border-[0.5px] border-neutral-300', className)}
      {...props}
    >
      {children}
    </Stack>
  );
}
