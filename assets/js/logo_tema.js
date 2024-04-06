// Función para cambiar la imagen
function cambiarImagen() {
    var imagen = document.getElementById("logo");
    // Verificar qué imagen está actualmente mostrándose
    if (imagen.src.endsWith("solt_w.png")) {
        imagen.src = "../img/solt_b.png"; // Cambiar a la imagen de tema oscuro
        imagen.alt = "Imagen en tema oscuro"; // Cambiar el texto alternativo si es necesario
    } else {
        imagen.src = "../img/solt_w.png"; // Volver a la imagen de tema claro
        imagen.alt = "Imagen en tema claro"; // Cambiar el texto alternativo si es necesario
    }
}
