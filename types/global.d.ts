declare global {
  type AppThemeT = {};
}

declare module '@react-navigation/native' {
  export function useTheme(): AppThemeT;
}

export {};
