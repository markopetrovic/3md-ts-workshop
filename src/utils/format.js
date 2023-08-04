// format 10000 => 10K, 1000000 => 1M
export const formatCount = (count) => {
  if (!count) return "";
  if (count < 10000) {
    return count.toLocaleString();
  }
  if (count < 1000000) {
    return Math.floor(count / 1000) + "K";
  }
  return Math.floor(count / 1000000) + "M";
};
