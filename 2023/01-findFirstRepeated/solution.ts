function findFirstRepeated(gifts: number[]): number | null {
  const giftSet = new Set<number>();

  for (const gift of gifts) {
    if (!giftSet.has(gift)) {
      giftSet.add(gift);
    } else return gift;
  }

  return -1;
}
