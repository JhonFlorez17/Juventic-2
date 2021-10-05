const templateCarrito = document.getElementById("template-carrito").content;
const templateFooter = document.getElementById("template-footer").content;
const btn_eliminar = document.querySelectorAll("btn-eliminar");
const fragment = document.createDocumentFragment();
const number_carrito = document.getElementById("number-cart");
const footer = document.getElementById("footer");
const items = document.getElementById("items");
let carrito_render = {};

document.addEventListener("DOMContentLoaded", (e) => {
  render_carrito();
  total_carrito();
});

function render_carrito() {
  items.innerHTML = "";
  carrito_render = JSON.parse(localStorage.getItem("carrito"));

  Object.values(carrito_render).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("span")[0].textContent = producto.precio;
    templateCarrito.querySelectorAll("td")[2].textContent = producto.cantidad;
    templateCarrito.querySelectorAll("span")[1].textContent =
      producto.precio * producto.cantidad;

    templateCarrito.querySelector(".btn-eliminar").dataset.id = producto.id;
    templateCarrito
      .querySelector(".btn-eliminar")
      .setAttribute("onclick", `elimar_produ(${producto.id})`);

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
  render_footer();
}

function elimar_produ(id) {
  delete carrito_render[id];
  localStorage.setItem("carrito", JSON.stringify(carrito_render));
  render_carrito();
  total_carrito();
}

function total_carrito() {
  const number_actual = Object.keys(carrito_render).length;
  number_carrito.textContent = number_actual;
}

function render_footer() {
  footer.innerHTML = "";
  if (Object.keys(carrito_render).length === 0) {
    footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `;
    return;
  }

  const nCantidad = Object.values(carrito_render).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(carrito_render).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  templateFooter.querySelectorAll("td")[1].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);


}
