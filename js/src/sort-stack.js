// Sort stack using recursion

// Input type: Array
// Sample input:
// [-3, 14, 18, -5, 30]

const sortStack = (s) => {
  if (s.length > 0) {
    var e = s.pop();
    sortStack(s);
    sortInsert(s, e);
  }
  return s;
}

const sortInsert = (s, e) => {
  if(s.length === 0 || e > s[s.length - 1]) {
    s.push(e);
  } else {
    var t = s.pop();
    sortInsert(s, e);
    s.push(t);
  }
}

return execute = (string) => {
  const input = JSON.parse(string);

  const result = sortStack(input);
  console.log(result);
  return result;
}
