// Practice

a[15] = 2;

// Solution

function arraySet(array, idx, value) {
  var newArray = array.slice();
  newArray[idx] = value;
  return newArray;
}
