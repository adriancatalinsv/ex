// find first unique character in a string

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

console.log(uniqueCharacter('abcdbad'));
console.log(uniqueCharacter('abcdbd'));
console.log(uniqueCharacter('abcacdbd'));
