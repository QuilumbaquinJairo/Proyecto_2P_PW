function abrirNuevaVentana() {
    // Tamaño y posición de la nueva ventana
    var opciones = "width=800,height=600,left=100,top=100";

    // URL del enlace
    var url = "../html/Login.html";

    // Abrir la nueva ventana
    window.open(url, "_blank", opciones);

    
}

function registro(){
    // Obtenemos una referencia al botón de "registrarse" por su id
    var btnRegistro = document.getElementById("btnRegistro");

// Agregamos un evento de clic al botón
    btnRegistro.addEventListener("click", function() {
    // Redireccionamos a la página "registro.html" en la misma ventana
    window.location.href = "../html/Registro.html";
    });

}