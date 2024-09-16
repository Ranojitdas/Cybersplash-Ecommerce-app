const products = [
    // Low-Flow Faucets
    {
        id: 1,
        name: "Low-Flow Kitchen Faucet",
        category: "faucets",
        price: 60,
        img: "p1.jpg",
        description: "A stylish low-flow kitchen faucet designed to save water."
    },
    {
        id: 2,
        name: "Low-Flow Bathroom Faucet",
        category: "faucets",
        price: 45,
        img: "p2.jpg",
        description: "A water-efficient bathroom faucet with sleek design."
    },
    {
        id: 3,
        name: "Low-Flow Showerhead",
        category: "faucets",
        price: 35,
        img: "p3.jpg",
        description: "A high-efficiency showerhead that conserves water."
    },
    {
        id: 4,
        name: "Eco Faucet with Temperature Control",
        category: "faucets",
        price: 75,
        img: "p4.jpg",
        description: "Save water with built-in temperature control."
    },
    {
        id: 5,
        name: "Dual-Flow Kitchen Tap",
        category: "faucets",
        price: 90,
        img: "p5.jpg",
        description: "Switch between low and high flow to manage water usage."
    },
    {
        id: 6,
        name: "Water-Saving Sink Tap",
        category: "faucets",
        price: 50,
        img: "p6.jpg",
        description: "An eco-friendly tap that reduces water flow by 40%."
    },
    {
        id: 7,
        name: "Touchless Low-Flow Faucet",
        category: "faucets",
        price: 100,
        img: "p7.jpg",
        description: "Touchless faucet for hygienic, water-efficient use."
    },
    {
        id: 8,
        name: "Aerated Bathroom Faucet",
        category: "faucets",
        price: 55,
        img: "p8.jpg",
        description: "Aerated faucet reduces water usage without losing pressure."
    },
    {
        id: 9,
        name: "Eco-Friendly Basin Tap",
        category: "faucets",
        price: 40,
        img: "p1.jpg",
        description: "Basin tap designed to conserve water efficiently."
    },
    {
        id: 10,
        name: "LED Water Saving Faucet",
        category: "faucets",
        price: 85,
        img: "p.jpg",
        description: "LED lights with flow reduction for bathroom sinks."
    },

    // Smart Irrigation Systems
    {
        id: 11,
        name: "Automatic Drip Irrigation Kit",
        category: "irrigation",
        price: 120,
        img: "https://example.com/irrigation1.jpg",
        description: "A complete drip irrigation system for water conservation."
    },
    {
        id: 12,
        name: "Smart Sprinkler Controller",
        category: "irrigation",
        price: 250,
        img: "https://example.com/irrigation2.jpg",
        description: "Control your sprinkler system from your smartphone."
    },
    {
        id: 13,
        name: "Soil Moisture Sensor",
        category: "irrigation",
        price: 30,
        img: "https://example.com/irrigation3.jpg",
        description: "Efficiently monitor soil moisture for optimized watering."
    },
    {
        id: 14,
        name: "Solar-Powered Irrigation Pump",
        category: "irrigation",
        price: 400,
        img: "https://example.com/irrigation4.jpg",
        description: "Eco-friendly solar pump for automated garden irrigation."
    },
    {
        id: 15,
        name: "Automatic Hose Timer",
        category: "irrigation",
        price: 70,
        img: "https://example.com/irrigation5.jpg",
        description: "Set automated schedules for your watering hose."
    },
    {
        id: 16,
        name: "Rain Sensor for Irrigation",
        category: "irrigation",
        price: 55,
        img: "https://example.com/irrigation6.jpg",
        description: "Avoid over-watering by monitoring rainfall."
    },
    {
        id: 17,
        name: "Multi-Zone Irrigation Controller",
        category: "irrigation",
        price: 150,
        img: "https://example.com/irrigation7.jpg",
        description: "Manage different garden zones with this smart controller."
    },
    {
        id: 18,
        name: "Weather-Based Sprinkler Controller",
        category: "irrigation",
        price: 220,
        img: "https://example.com/irrigation8.jpg",
        description: "Adjust watering based on the local weather forecast."
    },
    {
        id: 19,
        name: "Garden Watering Kit",
        category: "irrigation",
        price: 90,
        img: "https://example.com/irrigation9.jpg",
        description: "A kit designed for efficient and effective garden watering."
    },
    {
        id: 20,
        name: "Irrigation System for Greenhouses",
        category: "irrigation",
        price: 300,
        img: "https://example.com/irrigation10.jpg",
        description: "Water your greenhouse plants with precision."
    },

    // Water Recycling Units
    {
        id: 21,
        name: "Home Water Recycling Unit",
        category: "recycling",
        price: 1500,
        img: "https://example.com/recycling1.jpg",
        description: "Recycles wastewater for home use."
    },
    {
        id: 22,
        name: "Greywater Recycling System",
        category: "recycling",
        price: 2000,
        img: "https://example.com/recycling2.jpg",
        description: "Greywater recycling for bathroom and kitchen."
    },
    {
        id: 23,
        name: "Portable Water Recycling Kit",
        category: "recycling",
        price: 1200,
        img: "https://example.com/recycling3.jpg",
        description: "Compact recycling unit for small spaces."
    },
    {
        id: 24,
        name: "Rainwater Harvesting System",
        category: "recycling",
        price: 1800,
        img: "https://example.com/recycling4.jpg",
        description: "Collect rainwater for later use."
    },
    {
        id: 25,
        name: "Underground Water Storage",
        category: "recycling",
        price: 2500,
        img: "https://example.com/recycling5.jpg",
        description: "Store large quantities of recycled water underground."
    },
    {
        id: 26,
        name: "Compact Greywater Filter",
        category: "recycling",
        price: 850,
        img: "https://example.com/recycling6.jpg",
        description: "Filter greywater for reuse in gardens."
    },
    {
        id: 27,
        name: "Eco-Friendly Water Recycling System",
        category: "recycling",
        price: 1700,
        img: "https://example.com/recycling7.jpg",
        description: "Recycles wastewater with energy-efficient methods."
    },
    {
        id: 28,
        name: "Smart Water Recycling Monitor",
        category: "recycling",
        price: 500,
        img: "https://example.com/recycling8.jpg",
        description: "Monitor and control your water recycling system remotely."
    },
    {
        id: 29,
        name: "Large-Scale Water Recycling Plant",
        category: "recycling",
        price: 3000,
        img: "https://example.com/recycling9.jpg",
        description: "Industrial water recycling plant for big projects."
    },
    {
        id: 30,
        name: "Indoor Greywater Recycling",
        category: "recycling",
        price: 1100,
        img: "https://example.com/recycling10.jpg",
        description: "Recycles greywater inside your home."
    },

    // Eco-Friendly Garden Tools
    {
        id: 31,
        name: "Compost Bin",
        category: "gardening",
        price: 100,
        img: "https://example.com/gardening1.jpg",
        description: "Turn your organic waste into nutrient-rich compost."
    },
    {
        id: 32,
        name: "Rainwater Collection Barrel",
        category: "gardening",
        price: 150,
        img: "https://example.com/gardening2.jpg",
        description: "Collect and store rainwater for your garden."
    },
    {
        id: 33,
        name: "Eco-Friendly Garden Hose",
        category: "gardening",
        price: 60,
        img: "https://example.com/gardening3.jpg",
        description: "Water your plants efficiently with this eco-friendly hose."
    },
    {
        id: 34,
        name: "Smart Plant Sensor",
        category: "gardening",
        price: 80,
        img: "https://example.com/gardening4.jpg",
        description: "Monitor plant health with this smart sensor."
    },
    {
        id: 35,
        name: "Solar Garden Lights",
        category: "gardening",
        price: 40,
        img: "https://example.com/gardening5.jpg",
        description: "Illuminate your garden with energy-efficient solar lights."
    },
    {
        id: 36,
        name: "Eco-Friendly Plant Pots",
        category: "gardening",
        price: 25,
        img: "https://example.com/gardening6.jpg",
        description: "Sustainable plant pots made from recycled materials."
    },
    {
        id: 37,
        name: "Self-Watering Planters",
        category: "gardening",
        price: 90,
        img: "https://example.com/gardening7.jpg",
        description: "Self-watering planters to conserve water."
    },
    {
        id: 38,
        name: "Garden Compost Starter Kit",
        category: "gardening",
        price: 50,
        img: "https://example.com/gardening8.jpg",
        description: "Everything you need to start composting."
    },
    {
        id: 39,
        name: "Organic Fertilizer",
        category: "gardening",
        price: 35,
        img: "https://example.com/gardening9.jpg",
        description: "Organic fertilizer for healthier plants."
    },
    {
        id: 40,
        name: "Rainwater Irrigation Kit",
        category: "gardening",
        price: 100,
        img: "https://example.com/gardening10.jpg",
        description: "Use rainwater to irrigate your garden."
    }
];

let currentPage = 1;
let itemsPerPage = 9;
let filteredProducts = [...products];

// Load products dynamically
function loadProducts(page = 1) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    paginatedProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });

    createPagination(filteredProducts.length);
}

// Filter products by category
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    filteredProducts = products.filter(product => category === 'all' || product.category === category);
    loadProducts();
}

// Sort products by price
function sortProducts() {
    const sortOption = document.getElementById('sort-options').value;
    if (sortOption === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    loadProducts();
}

// Live search functionality
function liveSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    loadProducts();
}

// Add to cart functionality
let cart = [];
function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
}

// Pagination
function createPagination(totalItems) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = () => {
            currentPage = i;
            loadProducts(i);
        };
        pagination.appendChild(button);
    }
}

// Initial load
loadProducts();
