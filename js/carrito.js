const aumentar = document.getElementById("number-product");
const btn_aumentar = document.getElementById("btn-aumentar");
const btn_disminuir = document.getElementById("btn-disminuir");
const btn_nom_modal = document.getElementsByClassName("miboton");
const btn_nom_modal_bebidas = document.getElementsByClassName("h3m");
const div_modal = document.getElementById("modal-header");
const div_modal_buttom = document.getElementById("modal-footer");
const template = document.getElementById("template-card").content;
const template_bebidas = document.getElementById(
  "template-card-bebidas"
).content;
const fragment = document.createDocumentFragment();
const cards = document.getElementById("productos");
const cards_bebidas = document.getElementById("bebidas");
const img_id = document.getElementById("img-modal");
const cantidad_modal = document.getElementById("cantidad");
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

const bebidas = [
  {
    id: 12,
    nommbre_modal: "Standard black coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 12000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 13,
    nommbre_modal: "Standard black coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 7000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 14,
    nommbre_modal: "Standard black coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 4000,
    imagen: "images2/menu-beverage.jpg",
  },
  {
    id: 15,
    nommbre_modal: "Standard black coffee",
    descripcion: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
    precio: 9000,
    imagen: "images2/menu-beverage.jpg",
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

/* Render Bebidas */
bebidas.forEach((element) => {
  template_bebidas.querySelector("img").setAttribute("src", element.imagen);
  template_bebidas.querySelector("span").textContent = element.nommbre_modal;
  template_bebidas.querySelector("p").textContent = element.descripcion;
  template_bebidas.querySelector("strong").textContent =
    "$ " + element.precio + " COP";
  const clone_bebida = template_bebidas.cloneNode(true);
  fragment.appendChild(clone_bebida);
});
cards_bebidas.appendChild(fragment);

/* Captura evento click Modales */
for (let i = 0; i < btn_nom_modal.length; i++) {
  btn_nom_modal[i].addEventListener("click", function () {
    const Html = `<h5 class="modal-title" id="title-h5">${this.textContent}</h5>
    <button class="close" data-bs-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>`;

    const Html2 = `<button type="button" data-id="${i}" id="btn_enviarcar" onclick="addcarrito(${i},cat_act());" class="btn btn-secondary modalb" 
     data-bs-dismiss="modal">Enviar Al Carrito</button>`;

    const Html3 = `
    	<img src="${articulos[i].imagen}" class="logoCarritomodal" alt="" srcset="">
    `;

    div_modal.innerHTML = Html;
    div_modal_buttom.innerHTML = Html2;
    img_id.innerHTML = Html3;

    cantidad_input_modal(i);

    this.setAttribute("data-bs-toggle", "modal");
    this.click();
  });
}

/* Captura de evento click modales bebidas */

for (let j = 0; j < btn_nom_modal_bebidas.length; j++) {
  btn_nom_modal_bebidas[j].addEventListener("click", function () {
    const Html = `<h5 class="modal-title" id="title-h5">${this.textContent}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>`;

    const Html2 = `<button type="button" data-id="${bebidas[j].id}" id="btn_enviarcar" onclick="addcarrito(${bebidas[j].id},cat_act());" class="btn btn-secondary modalb" 
     data-bs-dismiss="modal">Enviar Al Carrito</button>`;

    const Html3 = `
    	<img src="${bebidas[j].imagen}" class="logoCarritomodal" alt="" srcset="">
    `;

    div_modal.innerHTML = Html;
    div_modal_buttom.innerHTML = Html2;
    img_id.innerHTML = Html3;

    cantidad_input_modal(bebidas[j].id);
  });
}

/* Boton Aumentar Modal */
btn_aumentar.addEventListener("click", () => {
  let num_actual = $("#cantidad").val();
  let num_update = parseInt(num_actual) + parseInt(1);
  $("#cantidad").val(num_update);
});

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

/* Añadir al carrito */
function addcarrito(id, cantidad) {
  let producto;
  if (id >= 0 && id <= 11) {
    producto = {
      title: articulos[id].nommbre_modal,
      precio: articulos[id].precio,
      id: id,
      cantidad: cantidad,
    };
  } else {
    let valor = bebidas.find((element) => (element.id = id));
    producto = {
      title: valor.nommbre_modal,
      precio: valor.precio,
      id: id,
      cantidad: cantidad,
    };
  }

  carrito[producto.id] = { ...producto };
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  notification();
  total_carrito();
}

/* Cantidad a enviar al carrito */
function cat_act() {
  return Number($("#cantidad").val());
}

/* Total carrito  */
function total_carrito() {
  const number_actual = Object.keys(carrito).length;
  number_carrito.textContent = number_actual;
}

/* Funcion Cantidad input modal cantidad */
function cantidad_input_modal(num) {
  if (carrito[num]) {
    $("#cantidad").val(carrito[num].cantidad);
  } else {
    $("#cantidad").val(1);
  }
}

/* Notificacion */
function notification() {
  alertify.set("notifier", "position", "bottom-left");
  alertify.success("Se agrego Con exito al carrito");
}
