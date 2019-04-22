function join(str, concatStr) {
  let joinStr = str[0];
  for(let i = 1 ; i < str.length ; i++){
    joinStr += concatStr + str[i];
  }
  return joinStr;
}

function repeat(str, times) {
  let strs = '';
  for (let i = 0; i < times ; i++) {
    strs += str
  }
  return strs;
}

console.log(join('aaaaa', '!'));
console.log(repeat('a', 5));