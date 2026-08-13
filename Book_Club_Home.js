// Data array storing information for each card
const FeatureBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    tag: "BESTSELLER",
    category: "Self-Development",
    rating: 4.8,
    price: "$16.99",
    image: "images/Atomic_habits.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    tag: "POPULAR",
    category: "Fiction / Inspirational",
    rating: 4.7,
    price: "$12.99",
    image: "images/The_Alchemist.jpg"
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    tag: "TRENDING",
    category: "Self-Development",
    rating: 4.6,
    price: "$14.99",
    image: "images/IKIGAI.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    tag: "BESTSELLER",
    category: "Finance / Personal Development",
    rating: 4.8,
    price: "$18.99",
    image: "images/The_psycology_of_money.jpg"
  }
];

// Function to render cards on the page
function renderCards() {
  const container = document.getElementById("cards-container");

  if (!container) return;

  // Map over the array and generate HTML for each book object
  container.innerHTML = FeatureBooks.map((book, idx) => `
    <div class="book-card">
      <div class="book-image">
        <img src="${book.image}" alt="${book.title}">
        <span class="book-badge">${book.tag}</span>
      </div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <div class="book-rating">
          <span class="stars">⭐</span>
          <span class="rating-number">${book.rating}</span>
        </div>
        <span class="book-genre">${book.category}</span>
        <div class="book-footer">
          <span class="book-price">${book.price}</span>
          <button class="btn-add-to-cart" data-index="${idx}">Add to Cart</button>
          <button class="btn-remove-from-cart" data-index="${idx}">Remove from Cart</button>
        </div>
      </div>
    </div>
  `).join("");

  
  if (typeof updateCartBadge === 'function') updateCartBadge();
}

function setupCartDelegation() {
  const container = document.getElementById("cards-container");
  if (!container) return;
 
  container.addEventListener('click', (e) => {
  
    const addBtn = e.target.closest('.btn-add-to-cart');
      if (addBtn) {
      const idx = addBtn.dataset.index;
      if (typeof addToCart === 'function') {
        addToCart(FeatureBooks[idx]);
      } else {
        console.error('addToCart is not available');
      }
      return;
    }
 
  
    const removeBtn = e.target.closest('.btn-remove-from-cart');
    if (removeBtn) {
      const idx = removeBtn.dataset.index;
      if (typeof removeFromCart === 'function') {
        removeFromCart(FeatureBooks[idx].title);
      } else {
        console.error('removeFromCart is not available');
      }
    }
  });
}
 
function init() {
  renderCards();
  setupCartDelegation(); 
}

// Execute rendering when the DOM content is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
console.log("Book cards rendered successfully.");
