import { DefaultTheme } from '@react-navigation/native';

declare global {
  type DefaultThemeT = typeof DefaultTheme;
  type AppThemeT = {} & DefaultThemeT;

  type UserData = {
    username: string;
    email: string;
  };
}

declare module '@react-navigation/native' {
  export function useTheme(): AppThemeT;
}

export {};
