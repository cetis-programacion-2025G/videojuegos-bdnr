const { insertarVideojuego }                = require('../../db/videojuegos/insertarVideojuego');
const { preguntar }                         = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function agregarVideojuego(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('AGREGAR VIDEOJUEGO');
    const titulo = await preguntar('  Titulo');
    const genero = await preguntar('  Genero');
    const precio = parseInt(await preguntar('  Precio'), 10);
    const stock  = parseInt(await preguntar('  Stock'),  10);
    const nuevo  = await insertarVideojuego(datos, { titulo, genero, precio, stock });
    console.log(`\n  Videojuego "${nuevo.titulo}" agregado con ID ${nuevo.id}.`);
}

module.exports = { agregarVideojuego };
