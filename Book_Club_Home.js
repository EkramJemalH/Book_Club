// Data array storing information for each card
const books = [
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
  container.innerHTML = books.map(book => `
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
          <button class="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Execute rendering when the DOM content is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCards);
} else {
  renderCards();
}
