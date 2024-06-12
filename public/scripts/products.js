//products.js
document.addEventListener('DOMContentLoaded', function() {
    const products = [
      {name: 'Fresh Eggs', category: 'eggs', price: 8.0, image: '../images/egg.jpg' },
      { name: 'Meat', category: 'meat', price: 10.00, image: '../images/meat.jpg' },
      { name: 'Chicken', category: 'chicken', price: 13.00, image: '../images/chicken.png' },
      { name: 'Fertilised Eggs', category: 'eggs', price: 8.0, image: '../images/eggs.jpg' },
      { name: 'Chopped-Chicken-Meat', category: 'meat', price: 10.00, image: '../images/chopped.webp' },
      { name: 'Cockrel', category: 'chicken', price: 13.00, image: '../images/cockrel.webp' },
      { name: 'Turkey', category: 'turkey', price: 20.00, image: '../images/turkey.jpg' },
      { name: 'Turkey-Eggs', category: 'eggs', price: 10.00, image: '../images/turkey-eggs.jpg' },
      { name: 'Marinated-Turkey', category: 'meat', price: 15.00, image: '../images/marinated-turkey.jpg' },
    ];
  
    let cart = [];
    const categorySelect = document.getElementById('category');
    const productList = document.querySelector('.product-list');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartSection = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');
  
    function renderProducts(category) {
      let filteredProducts = products;
      if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
        }
  
      productList.innerHTML = '';
      filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price.toFixed(2)}</p>
          <button class="btn add-to-cart"> Add to Cart </button>
        `;
        productList.appendChild(productItem);

        const addToCartButton = productItem.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            addToCart(product);
          });

        });
    }

      function addToCart(product) {
      cart.push(product);
      updateCartCount();
  }

      function updateCartCount() {
      cartCount.textContent = cart.length;
  }

      function renderCartItems() {
      cartItems.innerHTML = '';
      cart.forEach(product => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>Price: $${product.price.toFixed(2)}</p>
          `;
          cartItems.appendChild(cartItem);
      });
  }

      cartIcon.addEventListener('click', () => {
      cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
      renderCartItems();
  });
  
    renderProducts('all');
    renderFarmers(); // Call the renderFarmers function from farmers.js
  
    categorySelect.addEventListener('change', function() {
      const selectedCategory = this.value;
      renderProducts(selectedCategory);
    });
  
    productList.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-to-cart')) {
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        alert(`${productName} added to cart!`);
      }
    });
 });