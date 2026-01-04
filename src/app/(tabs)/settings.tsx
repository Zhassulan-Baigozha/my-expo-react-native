// src/app/(tabs)/settings.tsx

import { StyleSheet, View } from "react-native";
import { Typography } from "@/src/components/Typography";

export default function Settings() {
  return (
    <View style={styles.container}>
      Typography Examples:
      <Typography fontClass="body1Medium">body1Medium</Typography>
      <Typography fontClass="body1Regular">body1Regular</Typography>
      <Typography fontClass="body2Medium">body2Medium</Typography>
      <Typography fontClass="body2Regular">body2Regular</Typography>
      <Typography fontClass="body3Regular">body3Regular</Typography>
      <Typography fontClass="caption1Medium">caption1Medium</Typography>
      <Typography fontClass="caption1Regular">caption1Regular</Typography>
      <Typography fontClass="caption1Semibold">caption1Semibold</Typography>
      <Typography fontClass="caption2Medium">caption2Medium</Typography>
      <Typography fontClass="caption2Regular">caption2Regular</Typography>
      <Typography fontClass="caption2Semibold">caption2Semibold</Typography>
      <Typography fontClass="heading1">heading1</Typography>
      <Typography fontClass="heading3">heading3</Typography>
      <Typography fontClass="subtitles3">subtitles3</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
