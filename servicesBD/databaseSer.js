
const databaseSer = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });
    const table = 'usuarios';

    const getciente = () => {
        return knex(table).select();
    };

    const Crearcliente = (nombre,correo ) => {
        return knex(table).insert({
            nombre: nombre,
            correo: correo,
        });
    };

    return {Crearcliente, getciente};
};

module.exports = {
    databaseSer
};