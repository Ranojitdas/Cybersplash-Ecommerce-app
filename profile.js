// profile.js

// Initialize user profile from localStorage or set default
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    password: "password123"
};

// Initialize order history from localStorage or set default
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [
    {
        orderId: "ORD1234",
        date: "2024-08-15",
        status: "Completed",
        total: 4500
    },
    {
        orderId: "ORD1235",
        date: "2024-08-20",
        status: "Shipped",
        total: 1500
    }
    // Add more orders as needed
];

// Initialize saved addresses from localStorage or set default
let savedAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [
    "123 Water Conservation St, Eco City, State, PIN"
];

// Function to render profile information
function renderProfile() {
    document.getElementById('full-name').value = userProfile.fullName;
    document.getElementById('email').value = userProfile.email;
    document.getElementById('phone').value = userProfile.phone;
    document.getElementById('password').value = userProfile.password;
}

// Function to update profile
function updateProfile() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!fullName || !email || !phone || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Simple validation (you can enhance this)
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    userProfile = { fullName, email, phone, password };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    alert("Profile updated successfully!");
}

// Function to validate email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to render order history
function renderOrderHistory() {
    const orderHistoryContainer = document.getElementById('order-history');
    orderHistoryContainer.innerHTML = '';

    if (orderHistory.length === 0) {
        orderHistoryContainer.innerHTML = '<tr><td colspan="5">No orders found.</td></tr>';
        return;
    }

    orderHistory.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
            <td>₹${order.total}</td>
            <td><button class="view-details-btn" onclick="viewOrderDetails('${order.orderId}')">View</button></td>
        `;
        orderHistoryContainer.appendChild(row);
    });
}

// Function to view order details (placeholder)
function viewOrderDetails(orderId) {
    alert(`Viewing details for Order ID: ${orderId}`);
    // Implement actual order details view
}

// Function to render saved addresses
function renderAddresses() {
    const addressesContainer = document.getElementById('saved-addresses');
    addressesContainer.innerHTML = '';

    if (savedAddresses.length === 0) {
        addressesContainer.innerHTML = '<li>No saved addresses.</li>';
        return;
    }

    savedAddresses.forEach((address, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${address}
            <button class="remove-address-btn" onclick="removeAddress(${index})"><i class="fa fa-trash"></i></button>
        `;
        addressesContainer.appendChild(li);
    });
}

// Function to add a new address
function addAddress() {
    const newAddress = prompt("Enter your new address:");
    if (newAddress && newAddress.trim() !== "") {
        savedAddresses.push(newAddress.trim());
        saveAddresses();
        renderAddresses();
        alert("Address added successfully!");
    }
}

// Function to remove an address
function removeAddress(index) {
    if (confirm("Are you sure you want to remove this address?")) {
        savedAddresses.splice(index, 1);
        saveAddresses();
        renderAddresses();
        alert("Address removed successfully!");
    }
}

// Function to save addresses to localStorage
function saveAddresses() {
    localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderOrderHistory();
    renderAddresses();
});
