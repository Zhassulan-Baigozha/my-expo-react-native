type PregnancyResult = {
  weeks: number;
  days: number;
  totalDays: number;
};

export function calculatePregnancyTerm(
  dueDate: string | Date,
  today: Date = new Date()
): PregnancyResult {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const due = new Date(dueDate);

  // Дата начала беременности (акушерский срок)
  const pregnancyStart = new Date(due.getTime() - 280 * MS_PER_DAY);

  // Сколько дней прошло с начала беременности
  const totalDays = Math.floor(
    (today.getTime() - pregnancyStart.getTime()) / MS_PER_DAY
  );

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  return {
    weeks,
    days,
    totalDays,
  };
}
