function isPalindromes(str) {
  const strLen = str.length;
  for (let i = 0; i < strLen; i += 1) {
    if (str[i] !== str[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindromes;
