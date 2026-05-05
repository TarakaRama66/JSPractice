let products = [
  { id: 1, name: "Laptop", price: 150000 },
  { id: 2, name: "Phone", price: 23000 },
  { id: 3, name: "Headphones", price: 2500 },
  { id: 4, name: "Blutooth", price: 500 },
  { id: 5, name: "Airpods", price: 4000 }
];

let cart = [];

// Show products
function displayProducts() {
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach(p => {
    productDiv.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}


// Add to cart
function addToCart(id) {
  let item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    let product = products.find(p => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}


// update cart
function updateCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartDiv.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <p>Qty: ${item.quantity}</p>

        <button onclick="changeQty(${index}, 1)">+</button>
        <button onclick="changeQty(${index}, -1)">-</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}


// change quantity
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}


// Remove itam
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

displayProducts();