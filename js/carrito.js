const aumentar = document.getElementById("number-product");
const btn_aumentar = document.getElementById("btn-aumentar");
const btn_disminuir = document.getElementById("btn-disminuir");
const btn_nom_modal = document.getElementsByClassName("miboton");
const div_modal = document.getElementById("modal-header");
const div_modal_buttom = document.getElementById("modal-footer");
const template = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const cards = document.getElementById("productos");
const number_carrito = document.getElementById("number-cart");

let carrito = {};

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    total_carrito();
  }
});

const articulos = [
  {
    id: 0,
    nommbre_modal: "Bebida Especial 1",
    descripcion: "Bebida con limon y algunas yerbas camperas.",
    precio: 8000,
    imagen: "images2/img-01.jpg",
  },
  {
    id: 1,
    nommbre_modal: "Bebida Especial 2",
    descripcion: "Bebida con naranja y algunas yerbas camperas.",
    precio: 9000,
    imagen: "images2/img-02.jpg",
  },
  {
    id: 2,
    nommbre_modal: "Bebida Especial 3",
    descripcion: "Bebida con vodka y algunas yerbas camperas.",
    precio: 10000,
    imagen: "images2/img-03.jpg",
  },
  {
    id: 3,
    nommbre_modal: "Ensalada Especial 1",
    descripcion: "Ensalada con aguacte y vegetales camperos",
    precio: 15000,
    imagen: "images2/img-04.jpg",
  },
  {
    id: 4,
    nommbre_modal: "Ensalada Especial 2",
    descripcion: "Ensalada con huevos fritos y vegetales camperos",
    precio: 15000,
    imagen: "images2/img-05.jpg",
  },
  {
    id: 5,
    nommbre_modal: "Ensalada Especial 3",
    descripcion: "Ensalada con champiñons, miel y vegetales camperos",
    precio: 20000,
    imagen: "images2/img-06.jpg",
  },
  {
    id: 6,
    nommbre_modal: "Hamburguesa Especial 1",
    descripcion: "Hamburguesa extra L con queso especial",
    precio: 25000,
    imagen: "images2/img-07.jpg",
  },
  {
    id: 7,
    nommbre_modal: "Hot dog Especial 1",
    descripcion: "Hot Dog extra L con queso especial y ensalada",
    precio: 20000,
    imagen: "images2/img-08.jpg",
  },
  {
    id: 8,
    nommbre_modal: "Pizza Especial 1",
    descripcion: "Pizza de carne-queso especial",
    precio: 20000,
    imagen: "images2/img-09.jpg",
  },
  {
    id: 9,
    nommbre_modal: "Hamburguesa Especial 2",
    descripcion: "Hamburguesa extra con queso especial y papas",
    precio: 27000,
    imagen: "images2/img-10.jpg",
  },
  {
    id: 10,
    nommbre_modal: "Hot dog Especial 2",
    descripcion: "Hot Dog extra L con queso especial y ensalada",
    precio: 20000,
    imagen: "images2/img-11.jpg",
  },
  {
    id: 11,
    nommbre_modal: "Pizza Especial 2",
    descripcion: "Pizza de carne-queso especial",
    precio: 20000,
    imagen: "images2/img-12.jpg",
  },
];

let var_cant_ultima = 1;

/* Render menu */
articulos.forEach((element) => {
  template.querySelector("img").setAttribute("src", element.imagen);
  template.querySelector("h5").textContent = element.nommbre_modal;
  template.querySelector("p").textContent = element.descripcion;
  template.querySelector("#precio").textContent =
    "$ " + element.precio + " COP";
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});
cards.appendChild(fragment);
/* ---------- */

/* Captura evento click Modales */
for (let i = 0; i < btn_nom_modal.length; i++) {
  btn_nom_modal[i].addEventListener("click", function () {
    const Html = `<h5 class="modal-title" id="title-h5">${this.textContent}</h5>
    <button class="close" data-bs-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>`;

    const Html2 = `<button type="button" data-id="${i}" id="btn_enviarcar" onclick="addcarrito(${i},cat_act());" class="btn btn-secondary modalb" 
     data-bs-dismiss="modal">Enviar Al Carrito</button>`;

    div_modal.innerHTML = Html;
    div_modal_buttom.innerHTML = Html2;
    this.setAttribute("data-bs-toggle", "modal");
    this.click();
  });
}
/* ----------------------------- */

/* Boton Aumentar Modal */
btn_aumentar.addEventListener("click", () => {
  let num_actual = $("#cantidad").val();
  let num_update = parseInt(num_actual) + parseInt(1);
  $("#cantidad").val(num_update);
});
/* ----------------------------- */

/* Boton disminuir Modal */
btn_disminuir.addEventListener("click", () => {
  let num_actual = $("#cantidad").val();
  if (num_actual == 1) {
    $("#cantidad").val(1);
  } else {
    let num_update = parseInt(num_actual) - parseInt(1);
    $("#cantidad").val(num_update);
  }
});
/* ----------------------------- */

/* Reiniciar Input modal  */
$("#reg-modal").on("hidden.bs.modal", function () {
  $("#cantidad").val(1);
});
/* --------------------- */

/* Añadir al carrito */
function addcarrito(id, cantidad) {
  const producto = {
    title: articulos[id].nommbre_modal,
    precio: articulos[id].precio,
    id: id,
    cantidad: cantidad,
  };

  carrito[producto.id] = { ...producto };
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  total_carrito();
}
/* --------------- */


/* $("#cantidad").change(function () {
  var_cant_ultima = $("#cantidad").val();
  console.log(var_cant_ultima);
}); */

/* Cantidad a enviar al carrito */
function cat_act() {
  return Number($("#cantidad").val());
}
/* ---------------------------- */

/* Total carrito  */
function total_carrito() {
  const number_actual = Object.keys(carrito).length;
  number_carrito.textContent = number_actual;
}
/* -------------- */