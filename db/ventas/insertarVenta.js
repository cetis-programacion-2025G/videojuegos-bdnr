async function insertarVenta(datos, nuevaVenta) {
    let id;
    if (datos.ventas.length > 0) {
        id = datos.ventas[datos.ventas.length - 1].id + 1;
    } else {
        id = 1;
    }
    const venta = {
        id:      id,
        cliente: nuevaVenta.cliente,
        fecha:   nuevaVenta.fecha,
        items:   nuevaVenta.items,
    };
    datos.ventas.push(venta);
    for (let j = 0; j < nuevaVenta.items.length; j++) {
        const item = nuevaVenta.items[j];
        for (let i = 0; i < datos.videojuegos.length; i++) {
            if (datos.videojuegos[i].id === item.id_videojuego) {
                datos.videojuegos[i].stock -= item.cantidad;
                if (datos.videojuegos[i].stock < 0) {
                    datos.videojuegos[i].stock = 0;
                }
                break;
            }
        }
    }
    return venta;
}

module.exports = { insertarVenta };
