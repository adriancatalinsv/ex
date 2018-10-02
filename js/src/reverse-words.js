// Reverse words in a string

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

return execute = () => {
    console.log(reverseWordsSimple('ana are mere'));
}
