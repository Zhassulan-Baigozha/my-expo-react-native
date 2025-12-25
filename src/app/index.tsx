// src/app/index.tsx
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, color: "green" }}>Home Page</Text>
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        Press me
      </Button>
    </View>
  );
}
