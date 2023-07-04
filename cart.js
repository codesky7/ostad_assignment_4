

let cartItems = [];

export function addToCart(product, quantity = 1) {
  const cartItem = cartItems.find(item => item.product.id === product.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }
}

export function getCartItems() {
  return cartItems;
}

export function clearCart() {
  cartItems = [];
}
