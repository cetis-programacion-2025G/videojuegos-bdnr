const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarVideojuegos }  = require('./listarVideojuegos');
const { agregarVideojuego }  = require('./agregarVideojuego');
const { editarVideojuego }   = require('./editarVideojuego');
const { eliminarVideojuego } = require('./eliminarVideojuego');

async function menuVideojuegos(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        await listarVideojuegos(datos);
        console.log('─'.repeat(70));
        console.log('  1. Agregar videojuego');
        console.log('  2. Editar videojuego');
        console.log('  3. Eliminar videojuego');
        console.log('  0. Volver');
        console.log('─'.repeat(70));
        const op = await pedirEntero('Opcion', [0, 1, 2, 3]);
        switch (op) {
            case 1: await agregarVideojuego(datos);  await esperarEnter(); break;
            case 2: await editarVideojuego(datos);   await esperarEnter(); break;
            case 3: await eliminarVideojuego(datos); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuVideojuegos };
