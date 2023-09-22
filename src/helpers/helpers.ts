/**
 * Formats a given date into a string in the "dd/mm/yyyy" format.
 *
 * @param {Date | string} date - The date to be formatted, either as a Date object or a date string.
 * @returns {string | undefined} - The formatted date string or undefined if the input is invalid.
 */
export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  if (isNaN(date?.getTime())) return;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}/${month}/${year}`;
};

