import * as React from 'react';
import { useColorScheme } from 'react-native';
import { LightTheme } from '@/shared/constants/themes';
import { ThemeProvider } from '@react-navigation/native';

export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? LightTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}
