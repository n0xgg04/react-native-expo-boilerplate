import { DefaultTheme } from '@react-navigation/native';

const LightTheme: AppThemeT = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const DarkTheme: AppThemeT = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export { LightTheme, DarkTheme };
