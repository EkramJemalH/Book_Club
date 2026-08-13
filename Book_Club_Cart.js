const CART_KEY ='book_Club_Cart';

// Function to get the cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Function to save the cart to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
// Function to add a book to the cart
function addToCart(book) {
  const cart = getCart();
  const existingBook = cart.find(item => item.title === book.title);
  if (existingBook) {
    alert(`${book.title} is already in your cart!`);
    return false;
  } else {
    cart.push(book);
    saveCart(cart);
    alert(`${book.title} has been added to your cart!`);
    return true;
  }
}
//function to remove a book from the cart
function removeFromCart(bookTitle) {
  let cart = getCart();
  cart = cart.filter(item => item.title !== bookTitle);
  saveCart(cart);
  alert(`${bookTitle} has been removed from your cart!`);
  renderCart();
}
//function to get the total count of the cart items on the page
function getCartCount() {
  const cart = getCart();
  return cart.length;
  
}

//update the cart badge with the current count
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = getCartCount(); // Just shows the number
  }
}

//render the cart items on the page
function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  const cart = getCart();
  
  if (!cartContainer) return;
  
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }
}