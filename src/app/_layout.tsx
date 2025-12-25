// src/app/_layout.tsx
import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name="index" options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }} />
        <Tabs.Screen name="second" options={{
          title: 'Second',
          tabBarLabel: 'Second',
        }} />
      </Tabs>
    </PaperProvider>
  );
}
