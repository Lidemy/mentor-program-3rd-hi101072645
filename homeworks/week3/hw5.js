function add(a, b) {
  let num = 0;
  const aArr = a.split('').reverse();
  const bArr = b.split('').reverse();
  const totalArr = [];
  if (a.length >= b.length) {
    num = a.length;
  } else {
    num = b.length;
  }
  for (let i = 0; i <= num; i += 1) {
    if (!aArr[i]) {
      aArr[i] = 0;
    }
    if (!bArr[i]) {
      bArr[i] = 0;
    }
    totalArr[i] = parseInt(aArr[i], 10) + parseInt(bArr[i], 10);
  }
  for (let i = 0; i < num; i += 1) {
    if (totalArr[i] > 9) {
      totalArr[i + 1] = totalArr[i + 1] + Math.floor(totalArr[i] / 10);
      totalArr[i] %= 10;
    }
  }
  if (totalArr[num] === 0) {
    totalArr.pop();
  }
  return totalArr.reverse().join('');
}

module.exports = add;
