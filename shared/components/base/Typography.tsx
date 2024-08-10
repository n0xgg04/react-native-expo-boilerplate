import * as React from 'react';
import { Text } from 'moti';
import { VariantProps } from 'tailwind-variants';
import FontSize from '@/shared/constants/font-scale';
import { cn } from '@/shared/utils';
import { tv } from '@/shared/instants';

const v = tv({
  base: 'text-md',
  variants: {
    variant: {
      h1: `text-[${FontSize.FONT_SIZE_48}px]`,
      h2: `text-[${FontSize.FONT_SIZE_36}px]`,
      h3: `text-[${FontSize.FONT_SIZE_30}px]`,
      h4: `text-[${FontSize.FONT_SIZE_24}px]`,
      h5: `text-[${FontSize.FONT_SIZE_20}px]`,
      h6: `text-[${FontSize.FONT_SIZE_18}px]`,
      content: `text-[${FontSize.FONT_SIZE_16}px]`,
      sm: `text-[${FontSize.FONT_SIZE_14}px]`,
      xs: `text-[${FontSize.FONT_SIZE_12}px]`,
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
});

type Variants = VariantProps<typeof v>;
type Props = Variants & React.PropsWithChildren;
const FONT_SIZE = {
  h1: FontSize.FONT_SIZE_48,
  h2: FontSize.FONT_SIZE_36,
  h3: FontSize.FONT_SIZE_30,
  h4: FontSize.FONT_SIZE_24,
  h5: FontSize.FONT_SIZE_20,
  h6: FontSize.FONT_SIZE_18,
  content: FontSize.FONT_SIZE_16,
  sm: FontSize.FONT_SIZE_14,
  xs: FontSize.FONT_SIZE_12,
};

export function Typography({
  variant = 'content',
  weight,
  className,
  style,
  ...props
}: Props & React.ComponentProps<typeof Text>) {
  return (
    <Text
      className={cn(v({ variant, weight }), className)}
      style={[
        {
          fontSize: FONT_SIZE[variant],
        },
        style,
      ]}
      {...props}
    />
  );
}
