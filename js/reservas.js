$(document).ready(function () {
  

  $("#formulario").on("submit", function (event) {
    event.preventDefault();

    let evento = $("#evento").val();
    let fecha = $("#fecha").val();
    let hora = $("#hora").val();
    let numPersonas = $("#numPersonas").val();
    let nombreCliente = $("#nombreCliente").val();
    let correoCliente = $("#correoCliente").val();
    let celularCliente = $("#celularCliente").val();
    let solicitudCliente = $("#solicitudCliente").val();

    localStorage.setItem("evento", evento);
    localStorage.setItem("fecha", fecha);
    localStorage.setItem("hora", hora);
    localStorage.setItem("numPersonas", numPersonas);
    localStorage.setItem("nombreCliente", nombreCliente);
    localStorage.setItem("correoCliente", correoCliente);
    localStorage.setItem("celularCliente", celularCliente);
    localStorage.setItem("solicitudCliente", solicitudCliente);

    window.location.replace("confirmacion.html");
  });
});

function clickEvento(evento) {
  localStorage.setItem("evento", evento.value);
}

function clickFecha(fecha) {
  localStorage.setItem("fecha", fecha.value);
}

function clickHora(hora) {
  localStorage.setItem("hora", hora.value);
}

function clickPersonas(numPersonas) {
  localStorage.setItem("numPersonas", numPersonas.value);
}

function clickSolicitud(solicitudCliente) {
  localStorage.setItem("solicitudCliente", solicitudCliente.value);
}
