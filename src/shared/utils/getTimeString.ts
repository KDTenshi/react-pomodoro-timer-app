export const getTimeString = (time: number) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  const secondsString = seconds / 10 < 1 ? `0${seconds}` : `${seconds}`;
  const minutesString = minutes / 10 < 1 ? `0${minutes}` : `${minutes}`;

  return `${minutesString}:${secondsString}`;
};
