// script.js

const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "img/1.jpeg"  },
  { id: 2, name: "Shoes", price: 1299, image: "/img/2.jpeg" },
  { id: 3, name: "Backpack", price: 899, image: "/img/3.jpeg" },
  { id: 4, name: "Watch", price: 1999, image: "/img/4.jpeg" },
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-2">
    <h3 class="text-lg font-semibold">${product.name}</h3>
    <p class="text-gray-700">₹${product.price}</p>
    <button onclick="addToCart(${product.id})" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add to Cart
    </button>
  `;

  productGrid.appendChild(card);
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
