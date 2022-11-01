const options: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'short',
  day: 'numeric'
};

const formatDay = (date: Date) => {
  return date.toLocaleDateString('en-GB', { weekday: 'short' });
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-GB', options);
};

export { formatDay, formatDate };
