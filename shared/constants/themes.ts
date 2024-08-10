import { createTheme } from '@shopify/restyle';
import { Spacing } from '@/shared/constants/spacing';
import FontSize from '@/shared/constants/font-scale';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const lightTheme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    buttonBackground: palette.greenLight,
    textPrimary: palette.purplePrimary,
    textButtonFilled: palette.black,
  },
  spacing: {
    s: Spacing.SPACING_5,
    m: Spacing.SPACING_16,
    l: Spacing.SPACING_24,
    xl: Spacing.SPACING_40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: FontSize.FONT_SIZE_36,
    },
    body: {
      fontSize: FontSize.FONT_SIZE_16,
      lineHeight: FontSize.FONT_SIZE_24,
    },
    defaults: {},
  },
});

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    mainBackground: palette.black,
  },
};

export { lightTheme, darkTheme };
