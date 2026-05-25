const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarVentas }   = require('./listarVentas');
const { registrarVenta } = require('./registrarVenta');

async function menuVentas(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('VENTAS', 83);
        console.log('─'.repeat(85));
        console.log('  1. Ver ventas');
        console.log('  2. Registrar venta');
        console.log('  0. Volver');
        console.log('─'.repeat(85));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await listarVentas(datos);   await esperarEnter(); break;
            case 2: await registrarVenta(datos); await esperarEnter(); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuVentas };
