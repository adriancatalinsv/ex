// Min sub-array length with sum higher than value
// 
// Input : { 1,2,3,4 } & target = 6 , 
// OutPut : minimum length of the sub array with sum >= target 

// Input type: JSON
// Input examples:
// {"arr": [1, 2, 3, 4], "val": 6}
// {"arr": [7, 1, 2, 3, 4], "val": 6}
// {"arr": [1, 2, 3, 2], "val": 6}

const minSubArr = (arr, val) => {

  let l = arr.length;  
  let min = l+1;
  let currentMin;
  let sum = 0;
  
  for(let i=0; i<l; i++) {
    sum = arr[i];
    currentMin = 1;
    
    if(sum >= val) {
      return 1;
    }
    
    for(let j=i+1; j<l; j++) {
      
      sum += arr[j];
      currentMin++;
      
      if(sum >= val && currentMin < min) {
        min = currentMin;
        break;
      }
    
    }
  }
  
  return min
}

return execute = (string) => {
  const obj = JSON.parse(string);
  const result = minSubArr(obj.arr, obj.val);
  console.log(result);
  return result;
}
