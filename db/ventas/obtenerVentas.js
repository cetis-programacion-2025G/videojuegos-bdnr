async function obtenerVentas(datos) {
    const resultado = [];
    for (let i = 0; i < datos.ventas.length; i++) {
        const venta = datos.ventas[i];
        for (let j = 0; j < venta.items.length; j++) {
            const item = venta.items[j];
            let videojuego = null;
            for (let k = 0; k < datos.videojuegos.length; k++) {
                if (datos.videojuegos[k].id === item.id_videojuego) {
                    videojuego = datos.videojuegos[k];
                    break;
                }
            }
            let titulo, precio;
            if (videojuego) {
                titulo = videojuego.titulo;
                precio = videojuego.precio;
            } else {
                titulo = '(desconocido)';
                precio = 0;
            }
            resultado.push({
                id:      venta.id,
                cliente: venta.cliente,
                fecha:   venta.fecha,
                titulo:  titulo,
                precio:  precio,
                cant:    item.cantidad,
            });
        }
    }
    return resultado;
}

module.exports = { obtenerVentas };
