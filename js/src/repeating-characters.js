// Repeating characters
// 
// Display how many times a character is repeating in a string
// Input type: string
// ex: 'aaaabb' => 'a4b2' (or input : aaabbbaaccccdd , output : a3b3a2c4d2)
// '' => ''
// 'a' => 'a1'

const repeatCount = (s) => {
  let l = s.length;  
  let res = '';
  let count = 1;
  
  for(let i=0; i<l; i++) {
    if(s[i+1] != s[i]) {
      res += `${s[i]}${count}`;
      count = 1;
    } else {
      count++;
    }
  }
  
  return res;
}

return execute = (string) => {
  const result = repeatCount(string);
  console.log(result);
  return result;
}
