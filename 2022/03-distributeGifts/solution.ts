function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
	const reindeersWeight = reindeers.map((reindeer) => reindeer.length * 2);

	const maxWeightAllowed = reindeersWeight.reduce(
		(acc, curr) => acc + curr,
		0
	);

	const weightGifts = packOfGifts.reduce((acc, curr) => acc + curr.length, 0);

	return parseInt((maxWeightAllowed / weightGifts).toString());
}
