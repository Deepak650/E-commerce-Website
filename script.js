// Product data
const products = [
    {
        id: 1,
        name: "Smartphone",
        image: "assets/images/smartphone.jpg", // Replace with actual path to image
        price: "$499",
    },
    {
        id: 2,
        name: "Laptop",
        image: "assets/images/laptop.jpg", // Replace with actual path to image
        price: "$799",
    },
    {
        id: 3,
        name: "Headphones",
        image: "assets/images/headphones.jpg", // Replace with actual path to image
        price: "$199",
    },
    {
        id: 4,
        name: "Smartwatch",
        image: "assets/images/smartwatch.jpg", // Replace with actual path to image
        price: "$150",
    },
    // Add more products as needed
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="cart.html" class="buy-button">Buy Now</a>
        </div>
    `;
    
    return card;
}

// Display products on the page
function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}

// Call displayProducts when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
