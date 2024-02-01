function wrapping(gifts: string[]) {
	const listGiftsWrapping = gifts.map((gift) => {
		const wrapPaper = `${"*".repeat(gift.length + 2)}`;
		const wrapGift = `\n${"*"}${gift}${"*"}\n`;

		return `${wrapPaper}${wrapGift}${wrapPaper}`;
	});

	return listGiftsWrapping;
}
