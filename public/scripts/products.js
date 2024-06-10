//products.js
document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { name: 'Fresh Eggs', category: 'eggs', price: 8.0, image: '../images/egg.jpg' },
      { name: 'Meat', category: 'meat', price: 10.00, image: '../images/meat.jpg' },
      { name: 'Chicken', category: 'chicken', price: 13.00, image: '../images/chicken.png' },
      { name: 'Fertilised Eggs', category: 'eggs', price: 8.0, image: '../images/eggs.jpg' },
      { name: 'Chopped-Chicken-Meat', category: 'meat', price: 10.00, image: '../images/chopped.webp' },
      { name: 'Cockrel', category: 'chicken', price: 13.00, image: '../images/cockrel.webp' },
    ];
  
    const categorySelect = document.getElementById('category');
    const productList = document.querySelector('.product-list');
  
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
        productList.appendChild(productItem);});
    }
  
    renderProducts('all');
  
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