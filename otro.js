const express = require('express');
const app = express();
const port = 5500;

// Middleware para analizar datos JSON en solicitudes POST
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mi server umg');
});

// Configura la ruta para recibir el nombre
app.post('/guardar', (req, res) => {
  try {
    const nombre = req.body.nombre;

    if (!nombre) {
      // Si el campo 'nombre' no se proporciona, lanza un error
      throw new Error("El campo 'nombre' es obligatorio");
    }

    // Procesa el nombre como desees (por ejemplo, guardar en una base de datos)

    res.send('Nombre recibido correctamente');
  } catch (error) {
    // Manejo de errores: envía una respuesta de error con el mensaje
    res.status(400).json({ error: error.message });
  }
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor: ' + err.message);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
