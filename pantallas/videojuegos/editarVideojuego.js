const { buscarVideojuego }                   = require('../../db/videojuegos/buscarVideojuego');
const { actualizarVideojuego }               = require('../../db/videojuegos/actualizarVideojuego');
const { listarVideojuegos }                  = require('./listarVideojuegos');
const { preguntar }                          = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function editarVideojuego(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('EDITAR VIDEOJUEGO', 68);
    await listarVideojuegos(datos);
    if (datos.videojuegos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a editar'), 10);
    if (id === 0) return;
    const v  = await buscarVideojuego(datos, id);
    if (!v) { console.log('\n  Videojuego no encontrado.'); return; }
    console.log('\n  (Enter para conservar el valor actual)\n');
    const titulo    = (await preguntar(`  Titulo [${ v.titulo}]: `))   || v.titulo;
    const genero    = (await preguntar(`  Genero [${v.genero}]: `))    || v.genero;
    const precioStr =  await preguntar(`  Precio [$${v.precio}]: `);
    const stockStr  =  await preguntar(`  Stock  [${v.stock}]: `);
    const precio    = precioStr ? parseInt(precioStr, 10) : v.precio;
    const stock     = stockStr  ? parseInt(stockStr,  10) : v.stock;
    await actualizarVideojuego(datos, id, { titulo, genero, precio, stock });
    console.log('\n  Videojuego actualizado.');
}

module.exports = { editarVideojuego };
