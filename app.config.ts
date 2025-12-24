import pkg from "./package.json";

export default {
  expo: {
    name: pkg.name,
    slug: "my-expo-react-native",
    version: pkg.version,
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "myexporeactnative",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.zhass292.myexporeactnative",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./src/assets/images/android-icon-foreground.png",
        backgroundImage: "./src/assets/images/android-icon-background.png",
        monochromeImage: "./src/assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./src/assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./src/assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "8739a7e1-bad1-4274-b3b4-4323b8080262",
      },
    },
    owner: "zhass292",
  },
};
