import type { FC, ReactNode } from "react";
import { StyleSheet, Text, type TextProps } from "react-native";

const styles = StyleSheet.create({
  body1Medium: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  body1Regular: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  body2Medium: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  body2Regular: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  body3Regular: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
  caption1Medium: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
  caption1Regular: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  caption1Semibold: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  caption2Medium: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 12,
  },
  caption2Regular: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 12,
  },
  caption2Semibold: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 12,
  },
  heading1: {
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: -0.32,
  },
  heading3: {
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.24,
  },
  subtitles3: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});

type TFontClass = keyof typeof styles;

interface ITypographyProps extends TextProps {
  fontClass: TFontClass;
  children: ReactNode;
}

export const Typography: FC<ITypographyProps> = ({
  fontClass,
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[styles[fontClass], style]} {...props}>
      {children}
    </Text>
  );
};
