function getMaxGifts(
	giftsCities: number[],
	maxGifts: number,
	maxCities: number
) {
	let giftsCitiesSorted = giftsCities.sort((a, b) => b - a);

	let firstIndexValue = 0;
	let firstValue = giftsCitiesSorted[firstIndexValue];

	if (maxCities === 1) return maxGifts < firstValue ? 0 : firstValue;

	let isGreaterThan = firstValue > maxGifts;
	if (isGreaterThan) {
		for (let j = 1; j < giftsCitiesSorted.length && isGreaterThan; j++) {
			firstIndexValue = j;
			firstValue = giftsCitiesSorted[j];
			isGreaterThan = firstValue > maxGifts;
		}
	}

	maxCities--;

	let sumGifts = 0;
	let continueValidation = true;

	for (
		let i = firstIndexValue + 1;
		i < giftsCitiesSorted.length && continueValidation;
		i++
	) {
		sumGifts = firstValue;
		sumGifts += giftsCitiesSorted[i];

		if (sumGifts < maxGifts) {
			for (let j = 1; j < maxCities && sumGifts < maxGifts; j++) {
				if (giftsCitiesSorted[i + j])
					sumGifts += giftsCitiesSorted[i + j];
			}
		}

		if (sumGifts <= maxGifts) continueValidation = false;
	}

	return sumGifts;
}
