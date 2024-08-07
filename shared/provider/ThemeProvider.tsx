import * as React from 'react';
import { LightTheme } from '@/shared/constants/themes';
import { ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/shared/hooks/useColorSchema';

export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? LightTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}
