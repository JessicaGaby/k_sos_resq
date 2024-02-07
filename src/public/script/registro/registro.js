document.addEventListener("DOMContentLoaded", function() {
    var contrasenaInput = document.getElementById("contrasena");
    var iconoMostrarContrasena = document.getElementById("mostrarContrasenaIcono");

    iconoMostrarContrasena.addEventListener("click", function() {
        if (contrasenaInput.type === "password") {
            mostrarContrasena();
        } else {
            ocultarContrasena();
        }
    });

    function mostrarContrasena() {
        contrasenaInput.type = "text";
        iconoMostrarContrasena.classList.remove("fa-eye");
        iconoMostrarContrasena.classList.add("fa-eye-slash");
    }

    function ocultarContrasena() {
        contrasenaInput.type = "password";
        iconoMostrarContrasena.classList.remove("fa-eye-slash");
        iconoMostrarContrasena.classList.add("fa-eye");
    }
});

