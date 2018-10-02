// Selection sort

// Start with first element
// Go through the array and find the minimum value
// Then swap it with the first element - so that the first element is now the smallest
// Continue from index+1 to find the smallest value in the sub-array to the right and swap it with index+1

// Input type: Array
// Input examples:
// [4, 6, 3, 2, 9, 5]
// [4, 6, 3, 2, 2, 5]

const selectionSort = (arr) => {

  let l = arr.length;
    
  for(let i=0; i<l; i++) {
    
    let minIndex = i;
  
    for(let j=i+1; j<l; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
        
    // swap arr[i] with arr[minIndex]
    // const temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // ES6 swap
  }

  return arr;
}

return execute = (string) => {
  const arr = JSON.parse(string);
  const result = selectionSort(arr);
  console.log(result);
  return result;
}