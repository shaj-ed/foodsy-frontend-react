// Helper function for convert iso format date to BD Time string
export const formatBDTimeFromIsoString = (isoString: string): string => {
  if (!isoString) return '';

  const cleaned = isoString.split('.')[0] + 'Z';

  const date = new Date(cleaned);

  return date.toLocaleString('en-BD', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
