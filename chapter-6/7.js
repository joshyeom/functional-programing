// Practice

var a = { x: 1 };
delete a["x"];
console.log(a); // {}

// Solution
function objectDelete(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}
