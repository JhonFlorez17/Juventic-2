const number_carrito = document.getElementById("number-cart");

let carrito = {};

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    total_carrito();
  }
});

function total_carrito() {
  const number_actual = Object.keys(carrito).length;
  number_carrito.textContent = number_actual;
}
