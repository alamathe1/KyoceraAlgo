function braces(values) {
  var i;
  var result = [];
  var len = values.length;
  
  if(len>15) return;

  for (i = 0; i < len; i++) {
    if (values[i].length>100) return;
    
    if (isBalanced(values[i])) {
      result.push('YES');
    } else {
      result.push('NO');
    }
  }
  return result;
}

function isBalanced(str) {
  var i, ch;

  var bracketsMap = new Map();
  bracketsMap.set(']', '[');
  bracketsMap.set('}', '{');
  bracketsMap.set(')', '(');

  //Transforming a map into a 2D key-value Array using spread operator.
  var closingBrackets = [...bracketsMap.keys()];
  var openingBrackets = [...bracketsMap.values()];

  var temp = [];
  var len = str.length;

  for (i = 0; i < len; i++) {
    ch = str[i];

    if (openingBrackets.indexOf(ch) > -1) {
      temp.push(ch);
    } else if (closingBrackets.indexOf(ch) > -1) {

      var expectedBracket = bracketsMap.get(ch);
      if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
        return false;
      }

    } else {
      //Ignoring characters which are invalid.
      continue;
    }
  }

  return (temp.length === 0);
}

//braces(["{}[]()", "{[}]}"]);