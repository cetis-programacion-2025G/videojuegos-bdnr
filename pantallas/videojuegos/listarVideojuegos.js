const { obtenerVideojuegos }    = require('../../db/videojuegos/obtenerVideojuegos');
const { dibujarTabla, titulo }  = require('../../utils/ui');

async function listarVideojuegos(datos) {
    const filas = await obtenerVideojuegos(datos);
    const columnas = [
        { titulo: 'ID',     clave: 'id',     ancho: 4  },
        { titulo: 'Titulo', clave: 'titulo', ancho: 26 },
        { titulo: 'Genero', clave: 'genero', ancho: 12 },
        { titulo: 'Precio', clave: 'precio', ancho: 7  },
        { titulo: 'Stock',  clave: 'stock',  ancho: 5  },
    ];
    console.log('');
    titulo('LISTA DE VIDEOJUEGOS', 68);
    dibujarTabla(filas, columnas);
}

module.exports = { listarVideojuegos };
