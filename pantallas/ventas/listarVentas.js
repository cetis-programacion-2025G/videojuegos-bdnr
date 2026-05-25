const { obtenerVentas }         = require('../../db/ventas/obtenerVentas');
const { dibujarTabla, titulo }  = require('../../utils/ui');

async function listarVentas(datos) {
    const filas = await obtenerVentas(datos);
    const columnas = [
        { titulo: 'ID',      clave: 'id',      ancho: 4  },
        { titulo: 'Cliente', clave: 'cliente', ancho: 22 },
        { titulo: 'Titulo',  clave: 'titulo',  ancho: 26 },
        { titulo: 'Precio',  clave: 'precio',  ancho: 7  },
        { titulo: 'Fecha',   clave: 'fecha',   ancho: 10 },
    ];
    console.log('');
    titulo('LISTA DE VENTAS', 83);
    dibujarTabla(filas, columnas);
}

module.exports = { listarVentas };
