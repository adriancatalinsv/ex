
// Select a pivot - in this case the last element
// Partition the array into 2, 
// left from partitionIndex will be values smaller than pivot
// right from partitionIndex will be values higher than pivot
// do the same for the two smaller arrays

const quickSort = (arr, left, right) => {
  
  if(left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
  
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  
  return arr;
}


const partition = (arr, pivot, left, right) => {

  let partitionIndex = left;
    
  for(let i=left; i<right; i++) {
    if(arr[i] < arr[pivot]) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  
  swap(arr, partitionIndex, pivot);
  return partitionIndex;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}



console.log(quickSort([4, 6, 3, 2, 9, 5], 0, 5));
console.log(quickSort([4, 6, 3, 2, 2, 5], 0, 5));

