// src/components/ProgressBar.tsx
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";

export function ProgressBar() {
  return (
    <View style={styles.progressBarWrapper}>
      <View style={styles.progressBar1} />
      <LinearGradient
        style={styles.progressBar2}
        colors={[COLORS.coralShades.coral3, COLORS.coralShades.coral9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarWrapper: {
    height: 10,
  },
  progressBar1: {
    height: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  progressBar2: {
    height: 10,
    backgroundColor: COLORS.coralShades.coral3,
    borderRadius: 5,
    position: "relative",
    top: -10,
    width: "70%",
  },
});
