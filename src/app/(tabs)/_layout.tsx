// src/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import {
  ExploreTabIcon,
  HapticTab,
  HomeTabIcon,
} from "@/src/components/tab-bar-button";
import { Colors } from "@/src/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.text,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ExploreTabIcon,
        }}
      />
    </Tabs>
  );
}
