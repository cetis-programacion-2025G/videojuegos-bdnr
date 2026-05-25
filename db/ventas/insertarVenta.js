async function insertarVenta(datos, nuevaVenta) {
    let id;
    if (datos.ventas.length > 0) {
        id = datos.ventas[datos.ventas.length - 1].id + 1;
    } else {
        id = 1;
    }
    const venta = {
        id:            id,
        id_videojuego: nuevaVenta.id_videojuego,
        cliente:       nuevaVenta.cliente,
        fecha:         nuevaVenta.fecha,
    };
    datos.ventas.push(venta);
    for (let i = 0; i < datos.videojuegos.length; i++) {
        if (datos.videojuegos[i].id === nuevaVenta.id_videojuego) {
            if (datos.videojuegos[i].stock > 0) datos.videojuegos[i].stock -= 1;
            break;
        }
    }
    return venta;
}

module.exports = { insertarVenta };
