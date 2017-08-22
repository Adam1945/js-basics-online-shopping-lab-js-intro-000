var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 cart.push(new Object({[item]:price}))
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var i = 0;
  var bag = [];
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    while(i < cart.length) {
      bag.push(` ` + cart[i].item + ' at $'+ cart[i].price + ' and ');
      i++;
    }
  }
  return `In your cart, you have ${bag.join('')}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
