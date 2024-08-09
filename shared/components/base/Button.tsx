import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';
import { tv } from '@/shared/instants';
import { VariantProps } from 'tailwind-variants';
import { cn } from '@/shared/utils';
import { Spacing } from '@/shared/constants/spacing';
import { Typography } from '@/shared/components/base/Typography';
import { useTheme } from '@/shared/hooks';

type Props = {
  children: string;
};

const v = tv({
  variants: {
    variant: {
      filled: cn('bg-red-400'),
    },
  },
});

type TwProps = VariantProps<typeof v>;

export function Button({
  children,
  variant = 'filled',
  className,
  style,
  ...props
}: Props & TouchableOpacityProps & TwProps) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.buttonBackground,
          padding: Spacing.SPACING_4,
          borderRadius: Spacing.SPACING_5,
        },
        style,
      ]}
      className={cn(v({ variant }), className)}
      {...props}
    >
      <Typography>{children}</Typography>
    </TouchableOpacity>
  );
}
