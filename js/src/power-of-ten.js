// Power of 10
// 
// Check if a number is power of 10 (i.e.: 1000 it is, 500 is not).
// Input type: number

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

return execute = (string) => {
  const nbr = JSON.parse(string);
  const result = isPowerOfTen(nbr);
  console.log(result);
  return result;
}
