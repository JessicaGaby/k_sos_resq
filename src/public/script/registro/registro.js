
document.addEventListener("DOMContentLoaded", function() {
    var mostrarContrasenaCheckbox = document.getElementById("mostrarContrasena");
    var contrasenaInput = document.getElementById("contrasena");

    mostrarContrasenaCheckbox.addEventListener("change", function() {
        if (this.checked) {
            mostrarContrasena();
        } else {
            ocultarContrasena();
        }
    });

    function mostrarContrasena() {
        contrasenaInput.type = "text";
    }

    function ocultarContrasena() {
        contrasenaInput.type = "password";
    }
});

