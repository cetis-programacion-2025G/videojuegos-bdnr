async function insertarVideojuego(datos, nuevoVideojuego) {
    let id;
    if (datos.videojuegos.length > 0) {
        id = datos.videojuegos[datos.videojuegos.length - 1].id + 1;
    } else {
        id = 1;
    }
    const videojuego = {
        id:     id,
        titulo: nuevoVideojuego.titulo,
        genero: nuevoVideojuego.genero,
        precio: nuevoVideojuego.precio,
        stock:  nuevoVideojuego.stock,
    };
    datos.videojuegos.push(videojuego);
    return videojuego;
}

module.exports = { insertarVideojuego };
