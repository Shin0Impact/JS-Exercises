//1
function nbYear(p0, percent, aug, p) {
  let years = 0;
  const decimalPercent = percent / 100;
  
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * decimalPercent + aug);
    years++;
  }
  
  return years;
}
nbYear(1500, 5, 100, 5000);

//2
function number(busStops) {
  return busStops.reduce((remaining, [on, off]) => remaining + on - off, 0);
}
number([[10, 0], [3, 5], [5, 8]]);
