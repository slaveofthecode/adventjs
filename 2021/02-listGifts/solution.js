export default function listGifts(letter) {
  const letterFiltered = letter
    .trim()
    .split(" ")
    .filter((item) => !item.includes("_"));

  const result = {};
  letterFiltered.forEach((item) => {
    result[item] = result[item] ? result[item] + 1 : 1;
  });

  return result;
}
