function fitsInOneBox(boxes: { l: number; w: number; h: number }[]) {
	if (!boxes.length) return false;

	return boxes
		.sort((a, b) => a.l - b.l)
		.every(({ l: length, w: weight, h: height }, i, arr) => {
			const isLastItem = !arr[i + 1];

			const calculateLess = () =>
				length > arr[i - 1].l &&
				weight > arr[i - 1].w &&
				height > arr[i - 1].h;

			const calculateGreater = () =>
				length < arr[i + 1].l &&
				weight < arr[i + 1].w &&
				height < arr[i + 1].h;

			return isLastItem ? calculateLess() : calculateGreater();
		});
}
