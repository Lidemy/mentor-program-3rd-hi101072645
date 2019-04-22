function printStars(n) {
  let str = '*'
  for(let i = 0; i < n-1 ; i++){
    str += '\n' + '*'
  }
  console.log(str);
}

printStars(5);
