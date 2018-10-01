// Check if a number is power of 10 (i.e.: 1000 it is, 500 is not).

const isPowerOfTen = (n) => {
  while(n > 9 && n % 10 === 0) {
    n /= 10;
  }
  return n === 1;
}

const isPowerOfTenRec = (n) => {
  if(n > 9 && n % 10 === 0) {
    return isPowerOfTenRec(n/10);
  }
  return n === 1;
}

console.log(isPowerOfTen(100));
console.log(isPowerOfTen(1000));
console.log(isPowerOfTen(1100));

console.log(isPowerOfTenRec(100));
console.log(isPowerOfTenRec(1000));
console.log(isPowerOfTenRec(1100));
