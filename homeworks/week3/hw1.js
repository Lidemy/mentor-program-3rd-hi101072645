function stars(n) {
  const starArr = [];
  for (let i = 0; i < n; i += 1) {
    let star = '*';
    starArr.push(star);
    star += '*';
  }
  console.log(starArr);
}

module.exports = stars;
