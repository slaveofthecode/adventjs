function maxDistance(movements: string) {
  let countDistance = 0;
  let countRight = 0;
  let countLeft = 0;
  let countAsterisc = 0;

  let asterisc: string | null = null;

  for (let i: number = 0; i < movements.length; i++) {
    const currentValue = movements[i];

    if (asterisc == null) {
      if (currentValue === "*" && movements[i - 1] === ">") asterisc = ">";
      if (currentValue === "*" && movements[i - 1] === "<") asterisc = "<";
    }

    if (currentValue === ">" || (currentValue === "*" && asterisc === ">"))
      countRight++;

    if (currentValue === "<" || (currentValue === "*" && asterisc === "<"))
      countLeft++;

    if (currentValue === "*" && asterisc === null) countAsterisc++;
  }

  countDistance = Math.abs(countRight - countLeft + countAsterisc);

  return countDistance;
}
