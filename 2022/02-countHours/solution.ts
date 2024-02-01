function countHours(year: number, holidays: string[]) {
	return holidays.reduce((acc: number, current: string) => {
		const holidaySplited = current.split("/");

		const month = parseInt(holidaySplited[0]) - 1;
		const day = parseInt(holidaySplited[1]);

		const date = new Date(year, month, day);

		if ([0, 6].includes(date.getDay())) return acc;

		return acc + 2;
	}, 0);
}
