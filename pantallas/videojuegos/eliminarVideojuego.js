const { eliminarVideojuego: dbEliminar }     = require('../../db/videojuegos/eliminarVideojuego');
const { listarVideojuegos }                  = require('./listarVideojuegos');
const { preguntar, esperarEnter }            = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function eliminarVideojuego(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('ELIMINAR VIDEOJUEGO', 68);
    await listarVideojuegos(datos);
    if (datos.videojuegos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a eliminar'), 10);
    if (id === 0) return;
    const ok = await dbEliminar(datos, id);
    console.log(ok ? '\n  Videojuego eliminado.' : '\n  Videojuego no encontrado.');
    await esperarEnter();
}

module.exports = { eliminarVideojuego };
