function enviarDatos(nombre, correo) {
  const dataToSend = {
    nombre,
    correo
  };

  fetch('http://localhost:3000/cliente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);

    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const enviarButton = document.getElementById('enviar');
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');

  enviarButton.addEventListener('click', function(event) {
    const nombre = nombreInput.value;
    const correo = correoInput.value;

    enviarDatos(nombre, correo);
          // Limpiar los campos de entrada después de enviar los datos con éxito
          nombreInput.value = '';
          correoInput.value = '';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/cliente') // Reemplaza con la URL de tu servidor
      .then(response => response.json())
      .then(data => {
          const tableBody = document.querySelector('#clientesTable tbody');
          data.forEach(cliente => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${cliente.nombre}</td>
                  <td>${cliente.correo}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error al obtener los datos:', error);
      });
});