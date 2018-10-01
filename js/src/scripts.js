
const appendToDOM = (string) => {
  let pre = document.createElement('pre');
  let code = document.createElement('code');
  code.className = 'JavaScript';

  code.innerHTML = string;

  pre.appendChild(code);

  // create button
  let button = document.createElement('button');
  button.innerHTML = 'Execute';

  button.addEventListener('click', () => {
    document.querySelector( '.solution' ).innerHTML = reverseWordsLoop( document.querySelector( '.problem' ).textContent );
  });

  document.body.appendChild(pre);
  document.body.appendChild(button);
}

fetch('/js/src/reverse-words.js').then((response) => {

  var decoder = new TextDecoder();
  var reader = response.body.getReader();

  let finalResult = '';

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processResult(result) {
    if (result.done) {
      eval(finalResult);

      appendToDOM(finalResult);

      hljs.initHighlighting();
      return;
    };
    
    finalResult += decoder.decode(result.value, {stream: true})

    console.log(
      decoder.decode(result.value, {stream: true})
    );

    // Read some more, and recall this function
    return reader.read().then(processResult);
  });

});