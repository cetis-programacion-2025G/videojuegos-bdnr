const { obtenerVideojuegos }                              = require('../../db/videojuegos/obtenerVideojuegos');
const { insertarVenta }                                   = require('../../db/ventas/insertarVenta');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { preguntar, pedirEntero }                          = require('../../utils/input');

async function registrarVenta(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('REGISTRAR VENTA', 68);
    const disponibles = (await obtenerVideojuegos(datos)).filter(v => v.stock > 0);
    if (disponibles.length === 0) {
        console.log('\n  No hay videojuegos en stock.');
        return;
    }
    dibujarTabla(disponibles, [
        { titulo: 'ID',     clave: 'id',     ancho: 4  },
        { titulo: 'Titulo', clave: 'titulo', ancho: 26 },
        { titulo: 'Precio', clave: 'precio', ancho: 7  },
        { titulo: 'Stock',  clave: 'stock',  ancho: 5  },
    ]);
    const ids           = disponibles.map(v => v.id);
    console.log('  (0 para cancelar)');
    const id_videojuego = await pedirEntero('  ID Videojuego', [...ids, 0]);
    if (id_videojuego === 0) return;
    const cliente      = await preguntar('  Nombre del cliente');
    const fecha        = new Date().toISOString().slice(0, 10);
    const nueva        = await insertarVenta(datos, { id_videojuego, cliente, fecha });
    console.log(`\n  Venta registrada con ID ${nueva.id}.`);
}

module.exports = { registrarVenta };
