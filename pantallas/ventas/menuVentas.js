const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarVentas }   = require('./listarVentas');
const { registrarVenta } = require('./registrarVenta');

async function menuVentas(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        await listarVentas(datos);
        console.log('─'.repeat(93));
        console.log('  1. Registrar venta');
        console.log('  0. Volver');
        console.log('─'.repeat(93));
        const op = await pedirEntero('Opcion', [0, 1]);
        switch (op) {
            case 1: await registrarVenta(datos); await esperarEnter(); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuVentas };
