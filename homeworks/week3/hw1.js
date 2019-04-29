function stars(n) {
  const starArr = [];
  let star = '*';
  for (let i = 0; i < n; i += 1) {
    starArr.push(star);
    star += '*';
  }
  return starArr;
}

module.exports = stars;
