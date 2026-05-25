const { datosIniciales }   = require('./datos');
const { limpiarPantalla, titulo } = require('./utils/ui');
const { pedirEntero }      = require('./utils/input');
const { menuVideojuegos }  = require('./pantallas/videojuegos/menuVideojuegos');
const { menuVentas }       = require('./pantallas/ventas/menuVentas');
// TODO: const { conectar } = require('./conexion');

async function main() {
    // TODO: const { cliente, db } = await conectar();
    const datos = datosIniciales();
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('VIDEOJUEGOS — TIENDA');
        console.log('─'.repeat(46));
        console.log('  1. Videojuegos');
        console.log('  2. Ventas');
        console.log('  0. Salir');
        console.log('─'.repeat(46));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await menuVideojuegos(datos); break;
            case 2: await menuVentas(datos);      break;
            case 0: salir = true; break;
        }
    }
    // TODO: await cliente.close();
    console.log('\nHasta luego.\n');
}

main();
