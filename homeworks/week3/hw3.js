function isPrime(n) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  if (n === 1 || factors.length > 1) {
    return false;
  }
  return true;
}

module.exports = isPrime;
