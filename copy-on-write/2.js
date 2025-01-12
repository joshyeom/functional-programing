// Practice
var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); // 4
console.log(a); // [1, 2, 3]

// Solution
function popAndRead(array) {
  var copyArray = [...array];
  var lastElement = copyArray.pop();
  return {
    array: copyArray,
    lastElement: lastElement,
  };
}
