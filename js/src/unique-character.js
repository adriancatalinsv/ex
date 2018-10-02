// Find first unique character in a string
// Input type: string
// Input examples:
// abcdbad
// abcdbd
// abcacdbd

const uniqueCharacter = (s) => {

  let lib = {};
  let l = s.length;
  
  for(let i=0; i<l; i++) {
    if(typeof lib[s[i]] === 'undefined') {
      lib[s[i]] = 1;
    } else {
      lib[s[i]]++;
    }
  }
  
  for(let x in lib) {
    if(lib[x] === 1) {
      return x;
    }
  }
  return null;
}

return execute = (string) => {
  const result = uniqueCharacter(string);
  console.log(result);
  return result;
}