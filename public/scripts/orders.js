document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    function renderCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
    
        const cartGrid = document.querySelector('.cart-grid');
        cartGrid.innerHTML = '';
    
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
            `;
            cartGrid.appendChild(cartItem);
            total += product.price;
        });
    
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }
    renderCartItems();
});