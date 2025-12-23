import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";

const TabTwoScreen = () => (
  <ParallaxScrollView
    headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    headerImage={
      <IconSymbol
        size={310}
        color="#808080"
        name="chevron.left.forwardslash.chevron.right"
        style={styles.headerImage}
      />
    }
  >
    <ThemedView style={styles.titleContainer}>
      <ThemedText
        type="title"
        style={{
          fontFamily: Fonts.rounded,
        }}
      >
        Explore
      </ThemedText>
    </ThemedView>
    <Collapsible title="File-based routing">
      <ThemedText>
        <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
        <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
      </ThemedText>
      <ThemedText>
        <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>
      </ThemedText>
    </Collapsible>
    <Collapsible title="Android, iOS, and web support">
      <ThemedText type="defaultSemiBold">w</ThemedText>
    </Collapsible>
    <Collapsible title="Images">
      <ThemedText type="defaultSemiBold">@2x</ThemedText>
      <ThemedText type="defaultSemiBold">@3x</ThemedText>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
      />
    </Collapsible>
    <Collapsible title="Light and dark mode components">
      <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>
    </Collapsible>
    <Collapsible title="Animations">
      <ThemedText>
        <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>
        <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
          react-native-reanimated
        </ThemedText>
      </ThemedText>
      {Platform.select({
        ios: (
          <ThemedText>
            The{" "}
            <ThemedText type="defaultSemiBold">
              components/ParallaxScrollView.tsx
            </ThemedText>{" "}
            component provides a parallax effect for the header image.
          </ThemedText>
        ),
      })}
    </Collapsible>
  </ParallaxScrollView>
);

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default TabTwoScreen;
