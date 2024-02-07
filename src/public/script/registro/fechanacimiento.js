document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de entrada de fecha de nacimiento
    var inputFechaNacimiento = document.getElementById("inputPhone");

    // Agregar un evento de cambio a la entrada de fecha de nacimiento
    inputFechaNacimiento.addEventListener("change", function() {
      // Obtener la fecha de nacimiento del valor del campo
      var fechaNacimiento = new Date(inputFechaNacimiento.value);

      // Obtener la fecha actual
      var fechaActual = new Date();

      // Calcular la edad
      var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear() - ((fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) ? 1 : 0);

      // Verificar si la persona es mayor de edad (18 años o más)
      if (edad < 18) {
        alert("Lo siento, debes ser mayor de edad para continuar.");
        // Puedes agregar aquí más acciones según tus necesidades, como deshabilitar el botón de envío, mostrar un mensaje, etc.
      }
    });
  });
