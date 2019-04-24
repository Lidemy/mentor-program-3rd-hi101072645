function printFactor(n) {
  let factors = 1;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      factors += `'\n' ${i}`;
    }
  }
  return `${factors} '\n' ${n}`;
}

printFactor(10);
