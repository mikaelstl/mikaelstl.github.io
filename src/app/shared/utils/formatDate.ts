import { DateTime } from 'luxon';

function formatDate(date: Date | string | null): string {
  if (!date) {
    return 'No date'
  }

  return DateTime.fromISO(date.toLocaleString()).toFormat('dd/MM/yyyy')
}

export default formatDate;