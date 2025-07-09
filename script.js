// Product data
const productList = [
  { 
    id: 1,
    name: "Oppo F27 Pro", 
    price: 19999, 
    rating: 4.5, 
    ratingCount: 1245,
    category: "Electronics", 
    image: "images/Oppo-F27-Pro-Plus.jpg",
    description: "The latest Smartphone X with 6.5\" AMOLED display, 128GB storage, and 48MP triple camera system. Experience blazing fast performance with the Snapdragon 888 processor.",
    reviews: [
      { author: "Rahul K.", date: "2023-05-15", rating: 5, content: "Excellent phone with great camera quality. Battery lasts all day!" },
      { author: "Priya M.", date: "2023-04-22", rating: 4, content: "Very good performance but a bit heavy. Camera is amazing." }
    ]
  },
  { 
    id: 2,
    name: "Cotton T-Shirt", 
    price: 499, 
    rating: 4.2, 
    ratingCount: 342,
    category: "Clothing", 
    image: "images/cotton-t-shirt.webp",
    description: "Premium quality cotton t-shirt available in multiple colors. Comfortable fit for all-day wear. Machine washable with minimal shrinkage.",
    reviews: [
      { author: "Amit S.", date: "2023-06-10", rating: 5, content: "Very comfortable and true to size. Great value for money." }
    ]
  },
  { 
    id: 3,
    name: "Wireless Headphones", 
    price: 2499, 
    rating: 3.9, 
    ratingCount: 876,
    category: "Electronics", 
    image: "images/noise_headphone.webp",
    description: "Noise-cancelling wireless headphones with 30hr battery life. Features Bluetooth 5.0 and built-in microphone for calls.",
    reviews: [
      { author: "Neha P.", date: "2023-03-18", rating: 4, content: "Good sound quality and comfortable to wear for long periods." },
      { author: "Vikram J.", date: "2023-02-05", rating: 3, content: "Battery life is great but noise cancellation could be better." }
    ]
  },
  { 
    id: 4,
    name: "LED Desk Lamp", 
    price: 1299, 
    rating: 4.8, 
    ratingCount: 532,
    category: "Home", 
    image: "images/desk_lamp.jpg",
    description: "Adjustable LED desk lamp with 5 brightness levels and 3 color temperatures. USB charging port included. Energy efficient with long lifespan.",
    reviews: [
      { author: "Sanjay R.", date: "2023-05-30", rating: 5, content: "Perfect for my home office. Very sturdy and adjustable." }
    ]
  },
  { 
    id: 5,
    name: "Slim Fit Jeans", 
    price: 899, 
    rating: 3.5, 
    ratingCount: 287,
    category: "Clothing", 
    image: "images/slim-fit-jeans-for-mens.avif",
    description: "Stylish slim fit jeans made with stretchable denim for comfort. Available in multiple washes and sizes.",
    reviews: [
      { author: "Arun K.", date: "2023-04-12", rating: 4, content: "Good quality jeans but runs slightly small." },
      { author: "Meera D.", date: "2023-03-25", rating: 3, content: "Comfortable but color faded after a few washes." }
    ]
  },
  { 
    id: 6,
    name: "Food Mixer Grinder", 
    price: 2199, 
    rating: 4.0, 
    ratingCount: 412,
    category: "Home", 
    image: "images/food-mixer.jpg",
    description: "750W powerful mixer grinder with 3 stainless steel jars. Perfect for all your grinding and blending needs in the kitchen.",
    reviews: [
      { author: "Anita M.", date: "2023-06-05", rating: 5, content: "Works very well for all my cooking needs. Powerful motor." },
      { author: "Ramesh T.", date: "2023-05-18", rating: 4, content: "Good product but a bit noisy at highest speed." }
    ]
  },
  { 
    id: 7,
    name: "Smart Watch Pro", 
    price: 4499, 
    rating: 4.6, 
    ratingCount: 1023,
    category: "Electronics", 
    image: "images/watch.jpg",
    description: "Feature-packed smartwatch with heart rate monitoring, sleep tracking, and 10-day battery life. Water resistant for swimming.",
    reviews: [
      { author: "Deepak S.", date: "2023-06-12", rating: 5, content: "Excellent fitness tracker with accurate readings." },
      { author: "Pooja K.", date: "2023-05-22", rating: 4, content: "Great value for money. Battery life is as advertised." }
    ]
  },
  { 
    id: 8,
    name: "Winter Jacket", 
    price: 1599, 
    rating: 4.3, 
    ratingCount: 178,
    category: "Clothing", 
    image: "images/winter_jacket.webp",
    description: "Warm winter jacket with waterproof outer layer and insulated lining. Multiple pockets and adjustable hood.",
    reviews: [
      { author: "Kiran V.", date: "2023-01-15", rating: 5, content: "Kept me warm all winter. Very good quality." }
    ]
  },
  { 
    id: 9,
    name: "Blender with Grinder", 
    price: 1799, 
    rating: 3.8, 
    ratingCount: 321,
    category: "Home", 
    image: "images/blender.jpg",
    description: "600W blender with 1.5L capacity and separate dry grinding jar. Perfect for smoothies, soups, and grinding spices.",
    reviews: [
      { author: "Sunita R.", date: "2023-04-08", rating: 4, content: "Works well for my daily smoothies. Easy to clean." }
    ]
  },
  { 
    id: 10,
    name: '27" Monitor', 
    price: 18999, 
    rating: 4.7, 
    ratingCount: 654,
    category: "Electronics", 
    image: "images/27''_monitor.webp",
    description: "27-inch QHD monitor with 144Hz refresh rate and 1ms response time. Ideal for gaming and professional work.",
    reviews: [
      { author: "Rajiv N.", date: "2023-05-20", rating: 5, content: "Amazing display quality. Great for both work and gaming." },
      { author: "Anjali P.", date: "2023-04-15", rating: 4, content: "Excellent colors and sharpness. Takes some time to adjust settings." }
    ]
  }
];

// App state
let currentView = "products";
let currentProduct = null;
let cart = [];
let wishlist = [];

// Initialize the app
function init() {
  renderProducts(productList);
  updateCartBadge();
  updateWishlistBadge();
  
  // Load cart and wishlist from localStorage if available
  const savedCart = localStorage.getItem("cart");
  const savedWishlist = localStorage.getItem("wishlist");
  
  if (savedCart) cart = JSON.parse(savedCart);
  if (savedWishlist) wishlist = JSON.parse(savedWishlist);
  
  updateCartBadge();
  updateWishlistBadge();
  
  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  
  // Initialize event listeners
  document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") applyFilters();
  });
  
  document.getElementById("categoryFilter").addEventListener("change", applyFilters);
  document.getElementById("priceFilter").addEventListener("change", applyFilters);
  document.getElementById("ratingFilter").addEventListener("change", applyFilters);
}

// Render product listing page
function renderProducts(products) {
  currentView = "products";
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <h1 class="page-title">Our Products</h1>
    <div class="products-grid" id="products-grid"></div>
  `;
  
  const productsGrid = document.getElementById("products-grid");
  productsGrid.innerHTML = "";
  
  if (products.length === 0) {
    productsGrid.innerHTML = '<div class="empty-message">No products found matching your criteria.</div>';
    return;
  }
  
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3 class="product-title" onclick="showProductDetail(${product.id})">${product.name}</h3>
      <div class="product-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">${product.ratingCount}</span>
      </div>
      <div class="product-price">₹${product.price.toLocaleString()}</div>
      <div class="product-actions">
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="wishlist-btn" onclick="addToWishlist(${product.id})">💗</button>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

// Render star rating
function renderStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars += "★";
  }
  
  if (hasHalfStar) {
    stars += "½";
  }
  
  return stars;
}

// Show product detail view
function showProductDetail(productId) {
  currentView = "product-detail";
  const product = productList.find(p => p.id === productId);
  currentProduct = product;
  
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <button class="back-btn" onclick="goBack()">← Back to Products</button>
    <div class="product-detail-container">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <h2 class="product-detail-title">${product.name}</h2>
        <div class="product-detail-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.ratingCount} ratings)</span>
        </div>
        <div class="product-detail-price">₹${product.price.toLocaleString()}</div>
        <p class="product-detail-description">${product.description}</p>
        <div class="product-actions">
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="wishlist-btn" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        </div>
        
        <div class="reviews">
          <h3>Customer Reviews</h3>
          <div id="product-reviews"></div>
          <h4>Write a Review</h4>
          <textarea id="reviewText" placeholder="Share your thoughts about this product..."></textarea>
          <button class="add-to-cart" onclick="submitReview(${product.id})">Submit Review</button>
        </div>
      </div>
    </div>
  `;
  
  // Render reviews
  const reviewsContainer = document.getElementById("product-reviews");
  product.reviews.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";
    reviewElement.innerHTML = `
      <div class="review-header">
        <span class="review-author">${review.author}</span>
        <span class="review-date">${review.date}</span>
        <div class="stars">${renderStars(review.rating)}</div>
      </div>
      <div class="review-content">${review.content}</div>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Show cart view
function showCart() {
  currentView = "cart";
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <button class="back-btn" onclick="goBack()">← Back</button>
    <h1 class="page-title">Your Shopping Cart</h1>
    <div class="cart-container" id="cart-container"></div>
  `;
  
  const cartContainer = document.getElementById("cart-container");
  
  if (cart.length === 0) {
    cartContainer.innerHTML = '<div class="empty-message">Your cart is empty</div>';
    return;
  }
  
  // Render cart items
  cartContainer.innerHTML = '<div id="cart-items"></div><div class="cart-summary" id="cart-summary"></div>';
  
  const cartItemsContainer = document.getElementById("cart-items");
  cart.forEach(item => {
    const product = productList.find(p => p.id === item.id);
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h3 class="cart-item-title" onclick="showProductDetail(${product.id})">${product.name}</h3>
        <div class="cart-item-price">₹${product.price.toLocaleString()}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button onclick="updateCartItem(${product.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItem(${product.id}, ${item.quantity + 1})">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
  
  // Render cart summary
  const cartSummary = document.getElementById("cart-summary");
  const subtotal = cart.reduce((sum, item) => {
    const product = productList.find(p => p.id === item.id);
    return sum + (product.price * item.quantity);
  }, 0);
  const delivery = subtotal > 1000 ? 0 : 50;
  const total = subtotal + delivery;
  
  cartSummary.innerHTML = `
    <div class="summary-row">
      <span>Subtotal (${cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    <div class="summary-row">
      <span>Delivery</span>
      <span>${delivery === 0 ? "FREE" : "₹" + delivery}</span>
    </div>
    <div class="summary-row summary-total">
      <span>Total</span>
      <span>₹${total.toLocaleString()}</span>
    </div>
    <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
  `;
}

// Show wishlist view
function showWishlist() {
  currentView = "wishlist";
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <button class="back-btn" onclick="goBack()">← Back</button>
    <h1 class="page-title">Your Wishlist</h1>
    <div class="wishlist-container" id="wishlist-container"></div>
  `;
  
  const wishlistContainer = document.getElementById("wishlist-container");
  
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<div class="empty-message">Your wishlist is empty</div>';
    return;
  }
  
  wishlistContainer.innerHTML = '<div id="wishlist-items"></div>';
  
  const wishlistItemsContainer = document.getElementById("wishlist-items");
  wishlist.forEach(productId => {
    const product = productList.find(p => p.id === productId);
    const wishlistItem = document.createElement("div");
    wishlistItem.className = "wishlist-item";
    wishlistItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="wishlist-item-image">
      <div class="wishlist-item-info">
        <h3 class="wishlist-item-title" onclick="showProductDetail(${product.id})">${product.name}</h3>
        <div class="wishlist-item-price">₹${product.price.toLocaleString()}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">${product.ratingCount}</span>
        </div>
      </div>
      <div class="wishlist-item-actions">
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="remove-btn" onclick="removeFromWishlist(${product.id})">Remove</button>
      </div>
    `;
    wishlistItemsContainer.appendChild(wishlistItem);
  });
}

// Add product to cart
function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  
  updateCartBadge();
  saveCart();
  
  if (currentView === "cart") {
    showCart();
  } else {
    alert("Item added to cart!");
  }
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  saveCart();
  showCart();
}

// Update cart item quantity
function updateCartItem(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCartBadge();
    saveCart();
    showCart();
  }
}

// Add product to wishlist
function addToWishlist(productId) {
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    updateWishlistBadge();
    saveWishlist();
    alert("Item added to wishlist!");
  } else {
    alert("This item is already in your wishlist!");
  }
}

// Remove product from wishlist
function removeFromWishlist(productId) {
  wishlist = wishlist.filter(id => id !== productId);
  updateWishlistBadge();
  saveWishlist();
  showWishlist();
}

// Update cart badge count
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// Update wishlist badge count
function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-badge");
  const count = wishlist.length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Save wishlist to localStorage
function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Apply filters to product list
function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const price = document.getElementById("priceFilter").value;
  const rating = document.getElementById("ratingFilter").value;

  const filtered = productList.filter(p => {
    return (
      (category === "All Categories" || p.category === category) &&
      (!price || p.price <= parseInt(price)) &&
      (!rating || p.rating >= parseFloat(rating)) &&
      (p.name.toLowerCase().includes(search) || 
       p.description.toLowerCase().includes(search))
    );
  });

  renderProducts(filtered);
}

// Submit product review
function submitReview(productId) {
  const reviewText = document.getElementById("reviewText").value.trim();
  
  if (!reviewText) {
    alert("Please enter your review before submitting.");
    return;
  }
  
  const product = productList.find(p => p.id === productId);
  if (product) {
    // In a real app, you would send this to your backend
    product.reviews.unshift({
      author: "You",
      date: new Date().toISOString().split("T")[0],
      rating: 5, // Default to 5 stars for demo
      content: reviewText
    });
    
    // Update the product detail view
    showProductDetail(productId);
    document.getElementById("reviewText").value = "";
    
    alert("Thank you for your review!");
  }
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  
  alert("Order placed successfully! Thank you for your purchase.");
  cart = [];
  updateCartBadge();
  saveCart();
  showCart();
}

// Go back to previous view
function goBack() {
  if (currentView === "product-detail") {
    renderProducts(productList);
  } else if (currentView === "cart" || currentView === "wishlist") {
    renderProducts(productList);
  }
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Initialize the app when the page loads
window.onload = init;