import * as React from 'react';
import { darkTheme, lightTheme } from '@/shared/constants/themes';
import { useColorScheme } from '@/shared/hooks/useColorSchema';
import { ThemeProvider } from '@shopify/restyle';

export function AppThemeProvider({ children }: React.PropsWithChildren) {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
