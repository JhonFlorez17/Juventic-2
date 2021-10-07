
// FORMULARIO CARRIO

$(document).ready(function () {
 
    $("#formulario").on("submit", function (event) {
      event.preventDefault();
  
      let nombreCliente = $("#nombreCliente").val();
      let correoCliente = $("#correoCliente").val();
      
      localStorage.setItem("nombreCliente", nombreCliente);
      localStorage.setItem("correoCliente", correoCliente);
      
      window.location.replace("checkout.html");
    });
  });
  
  function clickNombre(nombreCliente) {
    localStorage.setItem("nombreCliente", nombreCliente.value);
  }
  
  function clickCorreo(correoCliente) {
    localStorage.setItem("correoCliente", correoCliente.value);
  }