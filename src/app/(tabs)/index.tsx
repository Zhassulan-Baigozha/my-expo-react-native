// src/app/(tabs)/index.tsx
import { ThemedText } from "@/src/components/themed-text";
import pkg from "../../../package.json";

export default function HomeScreen() {
  return <ThemedText>Welcome! {pkg.version}</ThemedText>;
}
