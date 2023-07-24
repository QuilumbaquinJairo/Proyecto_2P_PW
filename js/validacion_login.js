function registro() {

    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasenia").value;

    // Comprobar si los valores coinciden con los predeterminados ("usuario" y "usuario")
    if (usuario === "usuario" && contrasena === "usuario") {
        window.location.href = "../index.html";
    } else {
        // Mostrar mensaje de error en caso de credenciales incorrectas
        alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
}
