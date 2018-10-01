// Find second minimum from a list, without sorting it, time complexity should be O(n)

const secondMinimum = (arr) => {
  let min = arr[0];
  let smin = min;
  let l = arr.length;
  
  if(!l) {
    return null;
  }
  
  for(let i=1; i<l; i++) {
    if (arr[i] < min) {
      smin = min;
      min = arr[i];
    }
    if (arr[i] < smin && arr[i] > min) {
      smin = arr[i];
    }
  }
  return smin;
}

console.log(secondMinimum([10, 9, 4, 7, 3, 20, 14]));
console.log(secondMinimum([10, 9, 22, 7, 3, 20, 4]));
console.log(secondMinimum([3, 9, 4, 7, 2, 20, 14]));
console.log(secondMinimum([]));
