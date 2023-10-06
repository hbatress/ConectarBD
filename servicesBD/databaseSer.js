
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
    const table1='publicaciones';

    const getusuario = () => {
        return knex(table).select();
    };

    const getpublicaciones = () => {
        return knex(table1).select();
    };

    const crearusuario = (Nombre ) => {
        return knex(table).insert({
            Nombre: Nombre,
        });
    };

    const Crearpublicaciones = (Contenido,Usuario_ID ) => {
        return knex(table1).insert({

            Contenido: Contenido,
            Usuario_ID: Usuario_ID
        });
    };

    return {crearusuario, getusuario,getpublicaciones,Crearpublicaciones};
};

module.exports = {
    databaseSer
};