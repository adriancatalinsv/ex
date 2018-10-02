// Insertion sort
// 
// Pass the array with i and move each element that is bigger than the one in position i
// a position to the right. then position current i value into its sorted position in the sub-array (i -> 0)

// Input type: Array
// Input examples:
// [4, 6, 3, 2, 9, 5]
// [4, 6, 3, 2, 2, 5]

const insertionSort = (arr) => {

  let l = arr.length;
    
  for(let i=1; i<l; i++) {
  
    let el = arr[i];
    let j = i;
    
    while(j>0 && arr[j-1] > el) {
      arr[j] = arr[j-1];
      j--;
    }
    
    arr[j] = el;
  }

  return arr;
}

return execute = (string) => {
  const arr = JSON.parse(string);
  const result = insertionSort(arr);
  console.log(result);
  return result;
}
