// Practice
function setPrice(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

// Solution
function ObjectSet(object, key, value) {
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}

function setPrice(item, newPrice) {
  var newObject = ObjectSet(item, "price", newPrice);
  return newObject;
}
