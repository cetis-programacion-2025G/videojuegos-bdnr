async function obtenerVentas(datos) {
    const resultado = [];
    for (let i = 0; i < datos.ventas.length; i++) {
        const venta = datos.ventas[i];
        let videojuego = null;
        for (let k = 0; k < datos.videojuegos.length; k++) {
            if (datos.videojuegos[k].id === venta.id_videojuego) { videojuego = datos.videojuegos[k]; break; }
        }
        resultado.push({
            id:      venta.id,
            cliente: venta.cliente,
            fecha:   venta.fecha,
            titulo:  videojuego ? videojuego.titulo : '(desconocido)',
            genero:  videojuego ? videojuego.genero : '',
            precio:  videojuego ? videojuego.precio : 0,
        });
    }
    return resultado;
}

module.exports = { obtenerVentas };
