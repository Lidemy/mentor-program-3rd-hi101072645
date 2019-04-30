function stars(n) {
  const starsArr = [];
  let star = '*';
  for (let i = 0; i < n; i += 1) {
    starsArr.push(star);
    star += '*';
  }
  return starsArr;
}

module.exports = stars;
