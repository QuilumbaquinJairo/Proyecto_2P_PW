function cargarPagina(url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Cuando se completa la solicitud y el contenido se ha cargado exitosamente
            document.getElementById("contenido_html").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function changeStyle(styleSheet) {
    const pageStyle = document.getElementById("page-style");
    pageStyle.href = styleSheet;
}
