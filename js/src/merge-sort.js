// Merge sort
// 
// Split array in half, and continue spliting each half in half
// until the resulting arrays have only one element
// then merge backwards both halfs of each array 

// Input type: Array
// Input examples:
// [4, 6, 3, 2, 9, 5]
// [4, 6, 3, 2, 2, 5]

const mergeSort = (arr) => {

  const l = arr.length;
  if (l === 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length/2);
  
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {

  const ll = left.length;
  const rl = right.length;
  let l = 0;
  let r = 0;
  let res = [];
    
  while(l<ll && r<rl) {
    if(left[l] < right[r]) {
      res.push(left[l++]);
    } else {
      res.push(right[r++]);
    }
  }
    
  return res.concat(left.slice(l)).concat(right.slice(r));
}

return execute = (string) => {
  const arr = JSON.parse(string);
  const result = mergeSort(arr);
  console.log(result);
  return result;
}
