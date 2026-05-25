// TODO (MongoDB): db.collection('videojuegos').find().sort({ titulo: 1 }).toArray()
async function obtenerVideojuegos(datos) {
    return datos.videojuegos;
}

module.exports = { obtenerVideojuegos };
