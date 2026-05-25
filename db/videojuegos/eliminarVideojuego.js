async function eliminarVideojuego(datos, id) {
    let idx = -1;
    for (let i = 0; i < datos.videojuegos.length; i++) {
        if (datos.videojuegos[i].id === id) { idx = i; break; }
    }
    if (idx === -1) return false;
    datos.videojuegos.splice(idx, 1);
    return true;
}

module.exports = { eliminarVideojuego };
