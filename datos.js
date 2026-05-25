// datos.js — Datos iniciales de la tienda de videojuegos (version sin base de datos)

function datosIniciales() {
    return {
        videojuegos: [
            { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura', precio: 1299, stock: 5  },
            { id: 2, titulo: 'FIFA 2025',            genero: 'Deportes', precio: 999,  stock: 8  },
            { id: 3, titulo: 'Minecraft',            genero: 'Sandbox',  precio: 499,  stock: 12 },
            { id: 4, titulo: 'Call of Duty',         genero: 'Accion',   precio: 1099, stock: 3  },
            { id: 5, titulo: 'Mario Kart 8',         genero: 'Carreras', precio: 899,  stock: 6  },
            { id: 6, titulo: 'Elden Ring',           genero: 'RPG',      precio: 1199, stock: 4  },
        ],
        ventas: [
            { id: 1, id_videojuego: 1, cliente: 'Diego Hernandez',  fecha: '2026-05-20' },
            { id: 2, id_videojuego: 3, cliente: 'Valentina Cruz',   fecha: '2026-05-21' },
            { id: 3, id_videojuego: 2, cliente: 'Diego Hernandez',  fecha: '2026-05-22' },
        ],
    };
}

module.exports = { datosIniciales };
