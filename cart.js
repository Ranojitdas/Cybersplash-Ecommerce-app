// cart.js

// Sample products data (Replace with actual data or fetch from server)
const products = [
    {
        id: 1,
        name: "Low-Flow Kitchen Faucet",
        price: 600,
        img: "https://example.com/faucet1.jpg",
        description: "A stylish low-flow kitchen faucet designed to save water.",
        quantity: 1
    },
    {
        id: 2,
        name: "Smart Plant Sensor",
        price: 800,
        img: "https://example.com/gardening4.jpg",
        description: "Monitor plant health with this smart sensor.",
        quantity: 2
    }
    // Add more products as needed
];

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('subtotal').textContent = '0';
        document.getElementById('tax').textContent = '0';
        document.getElementById('shipping').textContent = '0';
        document.getElementById('total').textContent = '0';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: ₹${item.price}</p>
            </div>
            <div class="item-actions">
                <label for="quantity-${index}">Qty:</label>
                <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa fa-trash"></i> Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    calculateSummary();
}

// Function to update quantity
function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    cart[index].quantity = parseInt(newQuantity);
    saveCart();
    renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

// Function to calculate order summary
function calculateSummary() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    let tax = subtotal * 0.05; // Assuming 5% tax
    let shipping = subtotal > 1000 ? 0 : 100; // Free shipping for orders above ₹1000

    let total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('shipping').textContent = shipping.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    // Redirect to checkout page or integrate payment gateway
    window.location.href = 'checkout.html';
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
});
