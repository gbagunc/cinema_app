export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = ("0" + date.getUTCHours()).slice(-2);
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const year = date.getUTCFullYear();

  return `${hours}:${minutes}, ${day}.${month}.${year}`;
};
