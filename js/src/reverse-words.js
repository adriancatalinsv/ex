// Reverse words in a string
// Input type: string
// Example input: 
// ana are mere

const reverseWordsSimple = (input) => {
  return ( input ).toString().split(' ').reverse().join(' ');
};

const reverseWordsLoop = (input) => {
  let inputString = ( input ).toString();
  let inputLength = i = inputString.length;
  let output = '';
  let word = '';

  do {
    let char = inputString[ inputLength - i ];
    if ( char === ' ' || i === 0 ) {
        output = word  + ' ' + output;
        word = '';
    } else {
        word += char;
    }
  } while ( i -- );

  return output;
};

return execute = (string) => {
  const result = reverseWordsLoop(string);
  console.log(result);
  return result;
}
