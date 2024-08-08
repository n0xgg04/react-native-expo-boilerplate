import * as React from 'react';
import { View } from 'moti';
import { VariantProps } from 'tailwind-variants';
import { cn } from '@/shared/utils';
import { tv } from '@/shared/instants';

const v = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

type StackVariants = VariantProps<typeof v>;
type Props = React.ComponentProps<typeof View> &
  React.PropsWithChildren &
  StackVariants & {
    gap?: number;
  };

export default function Stack({
  direction = 'row',
  children,
  className,
  gap,
  style,
  ...props
}: Props) {
  return (
    <View
      className={cn(
        v({
          direction,
        }),
        className
      )}
      style={[
        {
          gap,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
