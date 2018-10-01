const functions = [];
const appendToDOM = (string, index) => {
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  code.className = 'JavaScript';

  code.textContent = string;

  pre.appendChild(code);

  // create button
  let button = document.createElement('button');
  button.innerHTML = 'Execute';

  button.addEventListener('click', () => {
    // document.querySelector( '.solution' ).innerHTML = reverseWordsLoop( document.querySelector( '.problem' ).textContent );
    functions[ index ]();
  });

  pre.setAttribute('class', `code-block-${index}`);

  document.body.appendChild(pre);
  document.body.appendChild(button);
}

const parseResponse = ( response, index ) => {

  let decoder = new TextDecoder();
  let reader = response.body.getReader();
  let finalResult = '';

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processResult( result ) {
    if (result.done) {
      eval( finalResult );
      functions.push( execute.bind( {} ) );
      appendToDOM( finalResult, functions.length - 1 );
      hljs.highlightBlock( document.querySelector( `.code-block-${index}` ) );
      return;
    };
    
    finalResult += decoder.decode(result.value, {stream: true});

    // Read some more, and recall this function
    return reader.read().then(processResult);
  });
};

Promise.all( [
  fetch( '/js/src/reverse-words.js' ),
  fetch( '/js/src/unique-character.js' )
] )
.then( ( responses ) => {
  responses.forEach( ( response, index ) => {
    parseResponse( response, index );
  } );
});
