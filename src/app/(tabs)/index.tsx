import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { calculatePregnancyTerm } from "@/src/utils/calculatePregnancyTerm";

export default function Home() {
  const [name, setName] = useState("Rose");
  const [dob, setDob] = useState("2026.05.22");

  const result = calculatePregnancyTerm("2026-05-22", new Date("2025-12-26"));
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.containerInner}>
        <View style={styles.containerContent}>
          <TextInput
            label="Имя"
            value={name}
            onChangeText={(val) => {
              setName(val);
            }}
          />
          <TextInput
            label="Предполагаемая дата родов"
            value={dob}
            onChangeText={(val) => {
              setDob(val);
            }}
          />
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            contentStyle={styles.buttonContent}
            style={styles.button}
          >
            Сохранить
          </Button>
          <Text>weeks = {JSON.stringify(result.weeks)}</Text>
          <Text>days = {JSON.stringify(result.days)}</Text>
          <Text>totalDays = {JSON.stringify(result.totalDays)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInner: {
    width: "80%",
  },
  containerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  button: {
    borderRadius: 10,
  },
  buttonContent: {
    borderRadius: 10,
    paddingVertical: 6,
  },
});
