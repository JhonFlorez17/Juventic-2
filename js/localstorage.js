const templateCarrito = document.getElementById("template-carrito").content;
const templateFooter = document.getElementById("template-footer").content;
const btn_eliminar = document.querySelectorAll("btn-eliminar");
const fragment = document.createDocumentFragment();
const number_carrito = document.getElementById("number-cart");
const footer = document.getElementById("footer");
const items = document.getElementById("items");
let carrito_render = {};

render_carrito();
function render_carrito() {
  items.innerHTML = "";
  carrito_render = JSON.parse(localStorage.getItem("carrito"));
  if (carrito_render) {
    Object.values(carrito_render).forEach((producto) => {
      templateCarrito.querySelector("th").textContent = producto.id;
      templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
      templateCarrito.querySelector("td strong").textContent = producto.precio;
      templateCarrito
        .querySelector("td input[id='cantidadTabla']")
        .setAttribute("value", producto.cantidad);
      templateCarrito.querySelector("td span").textContent =
        producto.precio * producto.cantidad;
      templateCarrito
        .querySelector("td input[id='cantidadTabla']")
        .setAttribute("data-id", producto.id);

      templateCarrito.querySelector(".btn-eliminar").dataset.id = producto.id;
      templateCarrito
        .querySelector(".btn-eliminar")
        .setAttribute("onclick", `elimar_produ(${producto.id})`);

      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    });
    items.appendChild(fragment);
    render_footer();
  } else {
    render_footer();
  }
}

function elimar_produ(id) {
  delete carrito_render[id];
  localStorage.setItem("carrito", JSON.stringify(carrito_render));
  notification_eliminar();
  render_carrito();
}

function render_footer() {
  footer.innerHTML = "";
  if (!localStorage.getItem("carrito")) {
    footer.innerHTML = `
    <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
    `;
    return;
  } else {
    const nCantidad = Object.values(carrito_render).reduce(
      (acc, { cantidad }) => parseInt(acc) + parseInt(cantidad),
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
}

$(".table").on("change", ".cantidadTabla", function (e) {
  const id_update = e.currentTarget.dataset.id;
  carrito_render[id_update].cantidad = e.currentTarget.value;
  localStorage.setItem("carrito", JSON.stringify(carrito_render));
  notification_update();
  render_carrito();
});

function vaciar_carrito() {
  localStorage.removeItem("carrito");
  notification_clencart();
  render_carrito();
}

function notification_eliminar() {
  alertify.set("notifier", "position", "bottom-right");
  alertify.error("Se Elimino producto del carrito");
}

function notification_update() {
  alertify.set("notifier", "position", "bottom-right");
  alertify.success("Se Actualizo Cantidad Con exito");
}

function notification_clencart() {
  alertify.set("notifier", "position", "bottom-right");
  alertify.error("Se Elimino el carrito");
}
