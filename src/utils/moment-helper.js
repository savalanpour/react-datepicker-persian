/**
 * Get days of a month that should be shown on a month page
 *
 * @param month A moment object
 * @returns {Array}
 */
export function getDaysOfMonth(month, isGregorian) {
  const days = [];

  const monthFormat = isGregorian ? 'Month' : 'jMonth';
  const dayOffset = isGregorian ? 0 : 1;

  const current = month.clone().startOf(monthFormat);
  const end = month.clone().endOf(monthFormat);

  // Set start to the first day of week in the last month
  current.subtract((current.day() + dayOffset) % 7, 'days');

  // Set end to the last day of week in the next month
  end.add(6 - (end.day() + dayOffset) % 7, 'days');

  while (current.isBefore(end)) {
    days.push(current.clone());
    current.add(1, 'days');
  }

  return days;
}
