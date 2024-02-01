function manufacture(gifts: string[], materials: string) {
	let giftsFinal: string[] = [];

	gifts.forEach((gift) => {
		let newGift = gift;
		materials.split("").forEach((material) => {
			newGift = newGift.replace(new RegExp(material, "g"), "");
		});

		if (newGift === "") giftsFinal.push(gift);
	});

	return giftsFinal;
}
