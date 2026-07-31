// Data array containing all books currently on your Books page
const books = [
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "ROMANCE",
    description: "A powerful story about love, difficult choices, and finding the courage to break unhealthy patterns.",
    price: "$14.99",
    image: "Book/it_end_with_us.jpg"
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    genre: "MYSTERY",
    description: "A determined student investigates a closed murder case and uncovers secrets someone wants to keep hidden.",
    price: "$13.99",
    image: "Book/a_good_girl_guide_to_murder.jpg"
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    genre: "FANTASY",
    description: "A young woman enters a deadly dragon-riding academy where survival means proving she is stronger than everyone expects.",
    price: "$16.99",
    image: "Book/Fourth_Wing.jpg"
  },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    genre: "HISTORICAL",
    description: "An emotional story of friendship, sacrifice, and resilience set against the turbulent history of Afghanistan.",
    price: "$15.99",
    image: "Book/a_thousand_splandid_suns.jpg"
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    genre: "FICTION",
    description: "A deeply emotional novel exploring friendship, trauma, love, and the lasting impact of the past.",
    price: "$18.99",
    image: "Book/a_little_life.jpg"
  },
  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    genre: "SELF-DEV",
    description: "A thought-provoking guide to overcoming the expectations of others and finding freedom through self-acceptance.",
    price: "$14.99",
    image: "Book/the_courage_to_be_disliked.jpg"
  },
  {
    title: "The Only Skill That Matters",
    author: "Jonathan Levi",
    genre: "SELF-DEV",
    description: "A practical book focused on learning faster, improving memory, and developing skills that help you grow.",
    price: "$12.99",
    image: "Book/the_only_skill_that_matters.jpg"
  },
  {
    title: "Human Superpowers",
    author: "Private Person",
    genre: "PSYCHOLOGY",
    description: "An exploration of human potential and the abilities that can help us understand ourselves and connect with others.",
    price: "$13.99",
    image: "Book/human_superpowers.jpg"
  },
  {
    title: "The Art of Logic",
    author: "Eugenia Cheng",
    genre: "NONFICTION",
    description: "An accessible introduction to logical thinking and how it can help us understand arguments and make better decisions.",
    price: "$15.99",
    image: "Book/the_art_of_logic.jpg"
  },
  {
    title: "The Let Them Theory",
    author: "Mel Robbins & Sawyer Robbins",
    genre: "SELF-DEV",
    description: "A practical approach to letting go of what you cannot control and focusing your energy on your own life and choices.",
    price: "$16.99",
    image: "Book/the_let_them_theory.jpg"
  },
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    genre: "THRILLER",
    description: "A housemaid discovers that the wealthy family she works for is hiding disturbing secrets behind closed doors.",
    price: "$13.99",
    image: "Book/the_housemaid.jpg"
  },
  {
    title: "Never Lie",
    author: "Freida McFadden",
    genre: "THRILLER",
    description: "A couple exploring an isolated house discovers a collection of recordings that reveals a chilling mystery.",
    price: "$13.99",
    image: "Book/never_lie.jpg"
  }
];

// Function to render books dynamically
function displayBooks() {
  const container = document.getElementById("books-grid");

  if (!container) return;

  container.innerHTML = books.map(book => `
    <div class="book-card">
      <div class="book-image">
        <div class="book-placeholder">
          <img src="${book.image}" alt="${book.title}">
        </div>
        <span class="book-badge">${book.genre}</span>
      </div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="book-description">${book.description}</p>
        <div class="book-footer">
          <span class="book-price">${book.price}</span>
          <button class="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Run render function once DOM is ready
document.addEventListener("DOMContentLoaded", displayBooks);