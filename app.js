

import { products } from './product.js';
import { addToCart, getCartItems, clearCart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const shoppingCart = document.getElementById('shopping-cart');
  const clearCartButton = document.getElementById('clear-cart');

  
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    const productName = document.createElement('span');
    productName.textContent = product.name;

    const productPrice = document.createElement('span');
    productPrice.textContent = `$${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      addToCart(product);
      displayCartItems();
    });

    productItem.appendChild(productName);
    productItem.appendChild(document.createTextNode(' - '));
    productItem.appendChild(productPrice);
    productItem.appendChild(document.createTextNode(' '));
    productItem.appendChild(addToCartButton);

    productList.appendChild(productItem);
  });

 
  function displayCartItems() {
    shoppingCart.innerHTML = '';

    const cartItems = getCartItems();
    let totalAmount = 0;

    cartItems.forEach(cartItem => {
      const { product, quantity } = cartItem;

      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');

      const cartItemName = document.createElement('span');
      cartItemName.textContent = product.name;

      const cartItemQuantity = document.createElement('span');
      cartItemQuantity.textContent = `x ${quantity}`;

      const cartItemPrice = document.createElement('span');
      const itemPrice = product.price * quantity;
      cartItemPrice.textContent = `$${itemPrice}`;

      cartItemElement.appendChild(cartItemName);
      cartItemElement.appendChild(document.createTextNode(' '));
      cartItemElement.appendChild(cartItemQuantity);
      cartItemElement.appendChild(document.createTextNode(' - '));
      cartItemElement.appendChild(cartItemPrice);

      shoppingCart.appendChild(cartItemElement);

      totalAmount += itemPrice;
    });

    const totalAmountElement = document.createElement('div');
    totalAmountElement.classList.add('cart-item');
    totalAmountElement.textContent = `Total: $${totalAmount}`;
    shoppingCart.appendChild(totalAmountElement);
  }

  clearCartButton.addEventListener('click', () => {
    clearCart();
    displayCartItems();
  });
});
