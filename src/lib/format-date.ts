export function formatDate(input: string | number | Date): string {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const pad = (num: number): string => String(num).padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}
