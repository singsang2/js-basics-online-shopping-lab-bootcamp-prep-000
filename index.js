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
  else if (cart.length === 1){
    s = s+`${cart[i].itemName} at $${cart[i].itemPrice}.`;
    return s
  }
  else{
    for(let i = 0; i<cart.length; i++){
      if(i<cart.length - 1){
        s = s + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
      else{
        s = s + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    }
  }
  return s;
}

function total() {
  var price =0;
  for(var x in cart){
    price += parseInt(x.itemPrice);
  }
  return price;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart";
}

function placeOrder(cardNumber) {
  if(cardNumber === null){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    cart = [];
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
}
