const axios = require('axios');

const dataToSend = {
nombre: 'Nombre del cliente',
correo: 'comprovarasdasd'
};

axios.post('http://localhost:3000/cliente', dataToSend)
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
