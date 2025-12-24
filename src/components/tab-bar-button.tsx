// src/components/haptic-tab.tsx
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import {
  SymbolView,
  type SymbolViewProps,
  type SymbolWeight,
} from "expo-symbols";
import type { StyleProp, ViewStyle } from "react-native";

export const HapticTab = (props: BottomTabBarButtonProps) => (
  <PlatformPressable
    {...props}
    onPressIn={(ev) => {
      if (process.env.EXPO_OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      props.onPressIn?.(ev);
    }}
  />
);

const IconSymbol = ({
  name,
  size = 24,
  color,
  style,
  weight = "regular",
}: Readonly<{
  name: SymbolViewProps["name"];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}>) => (
  <SymbolView
    weight={weight}
    tintColor={color}
    resizeMode="scaleAspectFit"
    name={name}
    style={[
      {
        width: size,
        height: size,
      },
      style,
    ]}
  />
);

export const HomeTabIcon = ({ color }: { color: string }) => (
  <IconSymbol size={28} name="house.fill" color={color} />
);

export const ExploreTabIcon = ({ color }: { color: string }) => (
  <IconSymbol size={28} name="paperplane.fill" color={color} />
);
