function cambiarImagen() {
    var imagen = document.getElementById("logo");
    // Verificar qué imagen está actualmente mostrándose
    if (imagen.src.endsWith("solt_w.png")) {
        imagen.src = "assets/img/solt_b.png"; // Cambiar a la imagen de tema oscuro
        imagen.alt = "Imagen en tema oscuro"; // Cambiar el texto alternativo si es necesario
        imagen.classList.remove("home__blob-img"); // Remover la clase de tema claro
        imagen.classList.add("home__blob"); // Agregar la clase de tema oscuro
        
    } else {
        imagen.src = "assets/img/solt_w.png"; // Volver a la imagen de tema claro
        imagen.alt = "Imagen en tema claro"; // Cambiar el texto alternativo si es necesario
        imagen.classList.remove("home__blob-img"); // Remover la clase de tema claro
        imagen.classList.add("home__blob"); // Agregar la clase de tema oscuro
        
    }
}
