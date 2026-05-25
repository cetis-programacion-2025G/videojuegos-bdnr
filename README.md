# Proyecto Final BDNR – Tienda de Videojuegos con MongoDB

## 1. Historia del problema

Una tienda de videojuegos necesita organizar su inventario y registrar ventas. Actualmente no sabe con precisión qué juegos tiene disponibles, cuáles se han vendido y qué clientes han comprado.

La organización necesita una solución sencilla en terminal que permita guardar la información de forma permanente usando una base de datos no relacional.

---

## 2. Objetivo del proyecto

Crear un sistema CLI que permita administrar videojuegos, clientes y ventas sencillas.

El sistema base será entregado por el docente funcionando con arreglos en memoria.  
El equipo deberá refactorizarlo para que funcione con **Node.js CLI + MongoDB**.

---

## 3. Situación inicial

El programa ya funciona, pero guarda los datos en arreglos.

Eso significa que:

- Al cerrar el programa, los datos se pierden.
- No existe una base de datos real.
- No hay colecciones, documentos ni referencias persistentes.

---

## 4. Misión del equipo

Modificar el sistema para que los datos se almacenen en MongoDB.

El equipo debe conservar el flujo principal del programa y reemplazar el uso de arreglos por operaciones con base de datos.

---

## 5. Colecciones mínimas sugeridas

- `videojuegos`
- `clientes`
- `ventas`

El equipo puede agregar campos adicionales, pero no debe aumentar demasiado el alcance.

---

## 6. Funciones mínimas del sistema

- Registrar videojuegos
- Registrar clientes
- Registrar ventas
- Agregar videojuegos a una venta
- Consultar ventas por cliente

---

## 7. Consulta o reporte obligatorio

Reporte de ventas: mostrar cliente, fecha, videojuegos comprados y total.

Esta consulta debe obtener información relacionada entre documentos o colecciones.

---

## 8. Requisitos de MongoDB

El proyecto debe incluir:

- Uso de colecciones.
- Documentos con estructura clara.
- Operaciones `insertOne`, `find`, `findOne`, `updateOne` y/o `deleteOne` según aplique.
- Al menos una relación por referencia.
- Al menos un uso de documento embebido.
- Justificación breve de qué se embebió y qué se referenció.

---

## 9. Modelo esperado en BDNR

### Uso de embedding

En el documento de venta puede embebirse el detalle de videojuegos comprados, cantidad, precio y subtotal.

### Uso de referencias

La venta debe referenciar al cliente mediante su ID.

No se permite resolver todo con un solo documento gigante.

---

## 10. Alcance limitado

Para que el proyecto sea posible en dos semanas, **no se pide**:

- No se requiere facturación real
- No se requiere manejo avanzado de inventario por sucursal
- No se requiere sistema de pagos

---

## 11. Reglas importantes

- No se debe cambiar el objetivo principal del sistema.
- No se deben usar arreglos como almacenamiento final.
- Los datos deben permanecer guardados después de cerrar y volver a abrir el programa.
- La evaluación se enfoca en la integración con MongoDB, no en rediseñar toda la aplicación.

---

## 12. Entregable esperado

El equipo debe entregar:

- Código Node.js CLI funcionando.
- Script JS (`datos.js`) con datos iniciales de prueba para cada colección.
- Evidencia de colecciones/documentos en MongoDB.
- Evidencia de pruebas.
- Breve explicación del modelo documental.
