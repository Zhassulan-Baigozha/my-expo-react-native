import { currentDate } from "../constants";

export const dateRangePicker = (
  initial: number,
  final: number,
  year?: number,
  month?: number // 1–12
): string[] => {
  let min = initial;
  let max = final;

  // ограничение по количеству дней в месяце
  if (year && month) {
    max = Math.min(
      final,
      new Date(year, month, 0).getDate()
    );
  }

  // если текущий месяц и год — не показываем прошедшие дни
  if (
    year === currentDate.year &&
    month === currentDate.month + 1
  ) {
    min = Math.max(initial, currentDate.day);
  }

  const range: string[] = [];

  for (let i = min; i <= max; i++) {
    range.push(i.toString().padStart(2, "0"));
  }

  return range;
};
