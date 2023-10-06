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
  const IDunput = document.getElementById('hiddenUserId');
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
  // Realiza una solicitud para obtener los datos de usuarios
  fetch('http://localhost:3000/usuarios')
      .then(response => response.json())
      .then(data => {
          const usuariosMap = new Map();
          data.forEach(usuario => {
              usuariosMap.set(usuario.ID, usuario.Nombre);
          });

          // Luego, realiza una solicitud para obtener los datos de publicaciones
          fetch('http://localhost:3000/publicaciones')
              .then(response => response.json())
              .then(data => {
                  const tableBody = document.querySelector('#PublicacionesTable tbody');
                  data.forEach(publicacion => {
                      const row = document.createElement('tr');
                      row.innerHTML = `
                          <td>${publicacion.ID}</td>
                          <td>${publicacion.Contenido}</td>
                          <td>${usuariosMap.get(publicacion.Usuario_ID)}</td>
                      `;
                      tableBody.appendChild(row);
                  });
              })
              .catch(error => {
                  console.error('Error al obtener los datos de publicaciones:', error);
              });
      })
      .catch(error => {
          console.error('Error al obtener los datos de usuarios:', error);
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

//muestra el listado de usuario
document.addEventListener("DOMContentLoaded", function () {
  const usuarioInput = document.getElementById("usuarioInput");
  const usuariosList = document.getElementById("usuariosList");
  const hiddenUserId = document.getElementById("hiddenUserId"); // Agrega un campo oculto para almacenar el ID.

  fetch("http://localhost:3000/usuarios")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener datos de usuarios");
      }
      return response.json();
    })
    .then((usuarios) => {
      usuarios.forEach((usuario) => {
        const option = document.createElement("option");
        option.value = usuario.Nombre;
        option.setAttribute("data-id", usuario.ID); // Establece un atributo 'data-id' con el ID.
        usuariosList.appendChild(option);
      });
    })
    .catch((error) => {
      console.error(error);
      // Puedes manejar el error de manera apropiada aquí, como mostrar un mensaje de error al usuario.
    });

  // Manejar el evento de selección en el datalist.
  usuarioInput.addEventListener("input", function () {
    const selectedOption = document.querySelector(`option[value="${usuarioInput.value}"]`);
    if (selectedOption) {
      const userId = selectedOption.getAttribute("data-id");
      hiddenUserId.value = userId; // Almacena el ID en un campo oculto.
    } else {
      hiddenUserId.value = ""; // Limpiar el ID si no se selecciona una opción válida.
    }
  });
});

const btnCliente = document.getElementById('btnCliente');
const btnPublicacion = document.getElementById('btnPublicacion');
const btnVolver = document.getElementById('btnVolver');
const usuariosSection = document.getElementById('usuariosSection');
const publicacionesSection = document.getElementById('publicacionesSection');
const tablaCliente = document.getElementById('tablaCliente');
const tablaPublicaciones = document.getElementById('tablaPublicaciones');

// Oculta los divs iniciales y el botón "Volver"
usuariosSection.style.display = 'none';
publicacionesSection.style.display = 'none';
tablaCliente.style.display = 'none';
tablaPublicaciones.style.display = 'none';

btnCliente.addEventListener('click', () => {
  // Muestra el div de "Cliente" y el formulario, y oculta el de "Publicación"
  usuariosSection.style.display = 'block';
  publicacionesSection.style.display = 'none';
  tablaCliente.style.display = 'block';
  tablaPublicaciones.style.display = 'none';
  btnCliente.style.display = 'none';
  btnPublicacion.style.display = 'none';
  btnVolver.style.display = 'block';
});

btnPublicacion.addEventListener('click', () => {
  // Muestra el div de "Publicación" y el formulario, y oculta el de "Cliente"
  usuariosSection.style.display = 'none';
  publicacionesSection.style.display = 'block';
  tablaCliente.style.display = 'none';
  tablaPublicaciones.style.display = 'block';
  btnCliente.style.display = 'none';
  btnPublicacion.style.display = 'none';
  btnVolver.style.display = 'block';
});

btnVolver.addEventListener('click', () => {
  // Regresa al menú principal y oculta el botón "Volver"
  usuariosSection.style.display = 'none';
  publicacionesSection.style.display = 'none';
  tablaCliente.style.display = 'none';
  tablaPublicaciones.style.display = 'none';
  btnCliente.style.display = 'block';
  btnPublicacion.style.display = 'block';
  btnVolver.style.display = 'none';
});