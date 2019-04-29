function alphaSwap(str) {
  let strSwap = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      strSwap += str[i].toLowerCase();
    } else {
      strSwap += str[i].toUpperCase();
    }
  }
  return strSwap;
}

module.exports = alphaSwap;
