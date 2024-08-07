import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Welcome',
        }}
      />
      <Tabs.Screen
        name="state"
        options={{
          title: 'State',
        }}
      />
      <Tabs.Screen
        name="api"
        options={{
          title: 'API Request',
        }}
      />
    </Tabs>
  );
}
