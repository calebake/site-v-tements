// Charger le panier
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Ajouter un produit
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Produit ajouté au panier !");
}

// Mettre à jour le badge du panier
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.textContent = cart.length;
  }
}

// Mise à jour au chargement de chaque page
document.addEventListener("DOMContentLoaded", updateCartCount);
