function reverseFunc(str) { 
var newStr= []
  for(var i = str.length-1; i > -1; i--)
  {
    newStr.push(str[i]);
  }
  str= newStr.join('');
  return str; 

}

console.log(reverseFunc('hello world'));