// src/components/themed-text.tsx

import type { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/theme";

export const ThemedText = ({ children }: PropsWithChildren) => {
  const color = Colors.light.text;

  return <Text style={[{ color }, styles.title]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
});
