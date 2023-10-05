const axios = require('axios');

function enviarDatos(nombre, correo) {
  const dataToSend = {
    nombre,
    correo
  };

  axios.post('http://localhost:3000/cliente', dataToSend)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

document.getElementById('enviar').addEventListener('click', function(event) {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  enviarDatos(nombre, correo);
});