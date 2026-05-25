async function buscarVideojuego(datos, id) {
    for (let i = 0; i < datos.videojuegos.length; i++) {
        if (datos.videojuegos[i].id === id) return datos.videojuegos[i];
    }
    return null;
}

module.exports = { buscarVideojuego };
