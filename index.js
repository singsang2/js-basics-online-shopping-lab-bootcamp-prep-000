var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)+1;
 cart.push({itemName:item, itemPrice:price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var s = "In your cart, you have ";
  if (cart.length === 0){
    return("Your shopping cart is empty.");
  }
  else{
    for(let i = 0; i<cart.length; i++){
      if(i<cart.length - 1){
        s = s + `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      else{
        s = s + `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
  }
  return s
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
