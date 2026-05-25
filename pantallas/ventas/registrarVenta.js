const { obtenerVideojuegos }                              = require('../../db/videojuegos/obtenerVideojuegos');
const { insertarVenta }                                   = require('../../db/ventas/insertarVenta');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { preguntar, pedirEntero }                          = require('../../utils/input');

async function registrarVenta(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('REGISTRAR VENTA', 53);
    const cliente = await preguntar('  Nombre del cliente');
    const items   = [];
    const reserva = {};
    let seguir    = true;

    while (seguir) {
        limpiarPantalla();
        console.log('');
        tituloUI('REGISTRAR VENTA', 53);
        console.log(`  Cliente: ${cliente}\n`);

        const videojuegos = await obtenerVideojuegos(datos);
        const filas = [];
        for (let i = 0; i < videojuegos.length; i++) {
            const v           = videojuegos[i];
            const stockActual = v.stock - (reserva[v.id] || 0);
            const fila        = { id: v.id, titulo: v.titulo, precio: v.precio };
            if (stockActual <= 0) {
                fila.stock = 'Agotado';
            } else {
                fila.stock = stockActual;
            }
            filas.push(fila);
        }

        dibujarTabla(filas, [
            { titulo: 'ID',     clave: 'id',     ancho: 4  },
            { titulo: 'Titulo', clave: 'titulo', ancho: 26 },
            { titulo: 'Precio', clave: 'precio', ancho: 7  },
            { titulo: 'Stock',  clave: 'stock',  ancho: 5  },
        ]);

        const idsDisponibles = [];
        for (let i = 0; i < videojuegos.length; i++) {
            const stockActual = videojuegos[i].stock - (reserva[videojuegos[i].id] || 0);
            if (stockActual > 0) {
                idsDisponibles.push(videojuegos[i].id);
            }
        }

        if (idsDisponibles.length === 0) {
            console.log('\n  No hay mas videojuegos disponibles.');
            break;
        }

        console.log('  (0 para terminar)');
        const id_videojuego = await pedirEntero('  ID Videojuego', [...idsDisponibles, 0]);

        if (id_videojuego === 0) {
            seguir = false;
        } else {
            let stockDisponible = 0;
            for (let i = 0; i < videojuegos.length; i++) {
                if (videojuegos[i].id === id_videojuego) {
                    stockDisponible = videojuegos[i].stock - (reserva[id_videojuego] || 0);
                    break;
                }
            }

            const cantidades = [];
            for (let c = 1; c <= stockDisponible; c++) {
                cantidades.push(c);
            }
            const cantidad = await pedirEntero(`  Cantidad (1-${stockDisponible})`, cantidades);

            let encontrado = false;
            for (let i = 0; i < items.length; i++) {
                if (items[i].id_videojuego === id_videojuego) {
                    items[i].cantidad += cantidad;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                items.push({ id_videojuego, cantidad });
            }
            reserva[id_videojuego] = (reserva[id_videojuego] || 0) + cantidad;

            const resp = await preguntar('  Agregar otro juego? (s/n)');
            if (resp.toLowerCase() !== 's') {
                seguir = false;
            }
        }
    }

    if (items.length === 0) {
        return;
    }

    const fecha = new Date().toISOString().slice(0, 10);
    const nueva = await insertarVenta(datos, { cliente, fecha, items });
    console.log(`\n  Venta registrada con ID ${nueva.id}.`);
}

module.exports = { registrarVenta };
