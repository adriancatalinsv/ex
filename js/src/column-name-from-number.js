// Column name from number
// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// MS Excel columns has a pattern like A, B, C, … ,Z, AA, AB, AC,…. ,AZ, BA, BB, … ZZ, AAA, AAB ….. 
// In other words, column 1 is named as “A”, column 2 as “B”, column 27 as “AA”.

// Input type: number
// Sample inputs
// 13    - result is M
// 28    - result is AB
// 1000  - result is ALL

const columnNameFromNumber = (nr) => {

  const mod = nr % 26;
  const letter = String.fromCharCode(64 + mod);
  nr = Math.floor(nr / 26);
  
  if (nr > 0) {
    return columnNameFromNumber(nr) + letter;
  } else {
    return letter;
  }
}

return execute = (string) => {
  const nr = JSON.parse(string);
  const result = columnNameFromNumber(nr);
  console.log(result);
  return result;
}