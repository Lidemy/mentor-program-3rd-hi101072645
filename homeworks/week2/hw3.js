function reverse(str) {
  let strLength = str.length - 1;
  let arr = str.split('').map((n,i)=>str[strLength - i]);
  return arr.join('');
}

reverse('hello');
