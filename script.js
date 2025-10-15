// Save cart items in localStorage so it persists between pages
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// On cart.html: display all cart items
if (window.location.pathname.includes('cart.html')) {
  const cartContainer = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🛍️</p>";
  } else {
    let total = 0;
    cartContainer.innerHTML = cart
      .map(item => {
        total += item.price;
        return `<div>${item.name} - ₹${item.price}</div>`;
      })
      .join('');
    cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
  }
}
