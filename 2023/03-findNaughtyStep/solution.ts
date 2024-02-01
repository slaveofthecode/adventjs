function findNaughtyStep(original: string, modified: string) {
  const originalSetted: string = original.toLowerCase().trim();
  const modifiedSetted: string = modified.toLowerCase().trim();

  let difference = "";

  if (originalSetted === modifiedSetted) return difference;

  let arrayToScan = originalSetted;
  let valueSecondary = modifiedSetted;

  if (modifiedSetted.length < originalSetted.length) {
    arrayToScan = modifiedSetted;
    valueSecondary = originalSetted;
  }

  difference = valueSecondary;
  arrayToScan.split("").forEach((step) => {
    difference = difference.replace(step, "");
  });

  return difference;
}
