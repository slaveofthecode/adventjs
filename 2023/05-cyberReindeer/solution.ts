function cyberReindeer(road: string, time: number) {
  const roadSantaClaus = [road];
  let lastRoad = ".";

  for (let t = 1, max = time; t < max; t++) {
    if (t === 5) road = road.replace(/\|/g, "*");

    const matches = road.match(/S[\*\.]/g);

    if (matches) {
      road = road.replace(matches[0], lastRoad + "S");
      lastRoad = matches[0][1];
    }

    roadSantaClaus.push(road);
  }

  return roadSantaClaus;
}
