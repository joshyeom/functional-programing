// Practice

function setQuantityByName(cart, name, quantity) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity = quantity;
    }
  }
}

// Solution
function setQuantityByName(cart, name, quantity) {
  var newCart = [...cart];
  for (var i = 0; i < newCart.length; i++) {
    if (newCart[i].name === name) {
      newCart[i].quantity = quantity;
    }
  }
  return newCart;
}
