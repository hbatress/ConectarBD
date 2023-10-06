module.exports = function(app,databaseSer) {

    app.get('/', (req, res) => {

        res.json({"Mensaje":"Todo bien"});
    });

    app.post('/publicaciones',(req,res)=>{
        const newLenguaje = req.body;
        console.log(newLenguaje);
            databaseSer
            .Crearpublicaciones(
                newLenguaje.Contenido, 
                newLenguaje.Usuario_ID)
            .then(() => {
                res.json({message: "Publicacion Exitosa"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });

    app.post('/usuarios',(req,res)=>{
        const newLenguaje = req.body;
        console.log(newLenguaje);
            databaseSer
            .crearusuario(
                newLenguaje.Nombre)
            .then(() => {
                res.json({message: "Agregado con exito"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });


    app.get('/usuarios',(req,res)=>{
    databaseSer.getusuario()
        .then(usuarios => res.json(usuarios))
        .catch(e => res.status(500).send(e));
});
    app.get('/publicaciones',(req,res)=>{
    databaseSer.getpublicaciones()
        .then(publicaciones => res.json(publicaciones))
        .catch(e => res.status(500).send(e));
});
    
}