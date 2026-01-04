// src/app/(tabs)/index.tsx
import { useState } from "react";
import { StyleSheet, TextInput as TextInputRN, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { PickerDueDate } from "@/src/components/PickerDueDate";
import { ProgressBar } from "@/src/components/ProgressBar";
import { Typography } from "@/src/components/Typography";
import { DUE_DATE_FULL } from "@/src/constants";
import { COLORS } from "@/src/constants/colors";
import { calculatePregnancyTerm } from "@/src/utils/calculatePregnancyTerm";

export default function Home() {
  const [name, setName] = useState("Rose");
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState("2026.05.22");

  const { days, weeks, totalDays } = calculatePregnancyTerm({ dueDate });
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.containerWrapper}>
        {!isFinished && (
          <View style={styles.containerContent}>
            <TextInput
              label="Имя"
              value={name}
              onChangeText={(val) => {
                setName(val);
              }}
            />
            <TextInputRN
              style={styles.inputRN}
              onChangeText={(val) => {
                setDueDate(val);
              }}
              value={dueDate}
              placeholder="Предполагаемая дата родов"
            />
            <TextInput
              label="Предполагаемая дата родов"
              value={dueDate}
              onChangeText={(val) => {
                setDueDate(val);
              }}
            />
            <Button
              mode="contained"
              onPress={() => {
                setIsFinished(true);
              }}
              contentStyle={styles.buttonContent}
              style={styles.button}
            >
              Сохранить
            </Button>
          </View>
        )}
        <View style={styles.cardContainer}>
          <ProgressBar progress={(DUE_DATE_FULL - totalDays) / DUE_DATE_FULL} />
          <Typography fontClass="body1Medium">
            Недель {weeks}, Дней {days}
          </Typography>
          <Typography fontClass="heading3">
            Дней до рождения {DUE_DATE_FULL - totalDays}
          </Typography>
          <Typography fontClass="body1Regular">
            Всего дней {totalDays}
          </Typography>
        </View>
        <PickerDueDate />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    padding: 16,
  },
  cardContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: COLORS.coralShades.coral1,
    borderRadius: 16,
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
  inputRN: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
