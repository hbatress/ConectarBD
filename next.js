function enviarDatos(Nombre) {
  const dataToSend = {
    Nombre
  };

  
  fetch('http://localhost:3000/usuarios', {
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
function enviarComentario(Contenido,Usuario_ID) {
  const dataToSend = {
    Contenido,
    Usuario_ID
  };

  
  fetch('http://localhost:3000/publicaciones', {
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
  const ComentarioButton = document.getElementById('enviarComentario');
  const nombreInput = document.getElementById('Usuario');
  const IDunput = document.getElementById('ID');
  const ComentarioInput = document.getElementById('Comentario');
  enviarButton.addEventListener('click', function(event) {
    const Nombre = nombreInput.value;

    enviarDatos(Nombre);
          // Limpiar los campos de entrada después de enviar los datos con éxito
          nombreInput.value = '';
  });
  ComentarioButton.addEventListener('click',function(event){
    const Idcliente = IDunput.value;
    const Comentario = ComentarioInput.value;
    enviarComentario(Comentario,Idcliente);
    ComentarioInput.value='';
  
  })

});


//muestra los datos del servidor
document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/publicaciones') // Reemplaza con la URL de tu servidor
      .then(response => response.json())
      .then(data => {
          const tableBody = document.querySelector('#PublicacionesTable tbody');
          data.forEach(publicaciones => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${publicaciones.ID}</td>
                  <td>${publicaciones.Contenido}</td>
                  <td>${publicaciones.Usuario_ID}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error al obtener los datos:', error);
      });
});

//muestra los Comentarios 
document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/usuarios') // Reemplaza con la URL de tu servidor
      .then(response => response.json())
      .then(data => {
          const tableBody = document.querySelector('#clientesTable tbody');
          data.forEach(usuarios => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${usuarios.ID}</td>
                  <td>${usuarios.Nombre}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error al obtener los datos:', error);
      });
});