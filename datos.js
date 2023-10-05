const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3002;


app.get('/',(req,res)=>{
    res.send('Hola mi server umg');
});

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'herberbatres',
  database: 'usuario',
});

// Conecta con la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error de conexión: ', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});


// Configura la ruta para recibir los datos del formulario
app.post('/guardar', (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;

  // Prepara la consulta SQL para insertar los datos en la base de datos
  const sql = `INSERT INTO usuarios (nombre, correo) VALUES (?, ?)`;
  const values = [nombre, correo];

  // Ejecuta la consulta
  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error al guardar los datos: ', error);
      res.send('Error al guardar los datos');
    } else {
      console.log('Datos guardados correctamente');
      res.send('Datos guardados correctamente');
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});