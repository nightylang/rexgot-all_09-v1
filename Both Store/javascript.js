//
//
//      Insert Product Data 
// 
// 


const products = [{
    id: 1,
    name: "Nebula Projector",
    price: 299.99,
    category: "tech",
    image: "https://picsum.photos/seed/nebula1/300/300",
    description: "Transform your room into a cosmic wonderland"
}, {
    id: 2,
    name: "Galaxy Art Print",
    price: 49.99,
    category: "art",
    image: "https://picsum.photos/seed/galaxy2/300/300",
    description: "Stunning cosmic artwork for your walls"
}, {
    id: 3,
    name: "Astronaut Helmet",
    price: 199.99,
    category: "gear",
    image: "https://picsum.photos/seed/helmet3/300/300",
    description: "Authentic space exploration gear"
}, {
    id: 4,
    name: "Star Map Lamp",
    price: 89.99,
    category: "tech",
    image: "https://picsum.photos/seed/star4/300/300",
    description: "Illuminate your space with constellations"
}, {
    id: 5,
    name: "Meteorite Necklace",
    price: 149.99,
    category: "art",
    image: "https://picsum.photos/seed/meteor5/300/300",
    description: "Wear a piece of the cosmos"
}, {
    id: 6,
    name: "Space Suit Jacket",
    price: 399.99,
    category: "gear",
    image: "https://picsum.photos/seed/suit6/300/300",
    description: "Futuristic fashion for space explorers"
}, {
    id: 7,
    name: "Planetarium Projector",
    price: 449.99,
    category: "tech",
    image: "https://picsum.photos/seed/planet7/300/300",
    description: "Bring the solar system to your home"
}, {
    id: 8,
    name: "Cosmic Crystal",
    price: 79.99,
    category: "art",
    image: "https://picsum.photos/seed/crystal8/300/300",
    description: "Mystical crystals from deep space"
}];

//  Shopping Cart
let cart = [];

//  Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    renderProducts(products);
    updateCartUI();
});

//  Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Render products
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card rounded-lg overflow-hidden cursor-pointer';
        card.innerHTML = `
                    <div class="relative group">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <button onclick="addToCart(${product.id})" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition transform hover:scale-105">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                        <p class="text-gray-400 text-sm mb-3">${product.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-indigo-400">$${product.price}</span>
                            <div class="flex items-center space-x-1">
                                <i class="fas fa-star text-yellow-400 text-sm"></i>
                                <span class="text-sm">${(Math.random() * 2 + 3).toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

// Filter products
function filterProducts(category) {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);

    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-600');
        btn.classList.add('bg-gray-800');
    });
    event.target.classList.remove('bg-gray-800');
    event.target.classList.add('bg-indigo-600');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update items
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg';
        cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-semibold">${item.name}</h4>
                        <p class="text-gray-400">$${item.price}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                            <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                            <i class="fas fa-plus text-xs"></i>
                        </button>
                    </div>
                `;
        cartItems.appendChild(cartItem);
    });

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartUI();
    }
}

// Toggle cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
}

// Cart button click
document.getElementById('cartBtn').addEventListener('click', toggleCart);

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-full transition-transform z-50';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateY(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Smooth scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('cartSidebar');
    const cartBtn = document.getElementById('cartBtn');

    if (!sidebar.contains(e.target) && !cartBtn.contains(e.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});