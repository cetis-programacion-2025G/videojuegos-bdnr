async function actualizarVideojuego(datos, id, cambios) {
    let videojuego = null;
    for (let i = 0; i < datos.videojuegos.length; i++) {
        if (datos.videojuegos[i].id === id) { videojuego = datos.videojuegos[i]; break; }
    }
    if (!videojuego) return null;
    videojuego.titulo = cambios.titulo;
    videojuego.genero = cambios.genero;
    videojuego.precio = cambios.precio;
    videojuego.stock  = cambios.stock;
    return videojuego;
}

module.exports = { actualizarVideojuego };
