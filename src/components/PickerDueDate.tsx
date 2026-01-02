import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { currentDate } from "../constants";
import { dateRangePicker } from "../utils/dateRangePicker";

export const PickerDueDate = () => {
  const [day, setDay] = useState(currentDate.day.toString().padStart(2, "0"));
  const [month, setMonth] = useState(
    currentDate.month.toString().padStart(2, "0"),
  );
  const [year, setYear] = useState(currentDate.year.toString());

  return (
    <View>
      <Text>Выберите дату</Text>
      <View style={styles.row}>
        <Picker
          style={styles.picker}
          selectedValue={year}
          onValueChange={(itemValue) => {
            setYear(itemValue);
          }}
        >
          {dateRangePicker(currentDate.year, currentDate.year + 1).map((dateItem) => (
            <Picker.Item key={dateItem} label={dateItem} value={dateItem} />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={month}
          onValueChange={(itemValue) => {
            setMonth(itemValue);
          }}
        >
          {dateRangePicker(1, 12, +year).map((dateItem) => (
            <Picker.Item key={dateItem} label={dateItem} value={dateItem} />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={day}
          onValueChange={(itemValue) => {
            setDay(itemValue);
          }}
        >
          {dateRangePicker(1, 31, +year, +month).map((dateItem) => (
            <Picker.Item key={dateItem} label={dateItem} value={dateItem} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    gap: 20,
  },
  picker: {
    flex: 1,
  },
});
