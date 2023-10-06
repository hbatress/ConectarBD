module.exports = function(app,databaseSer) {

    app.get('/', (req, res) => {

        res.json({"Mensaje":"Todo bien"});
    });

    app.post('/cliente',(req,res)=>{
        const newLenguaje = req.body;
        console.log(newLenguaje);
            databaseSer
            .Crearcliente(
                newLenguaje.nombre, 
                newLenguaje.correo)
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });

    app.get('/cliente',(req,res)=>{
    databaseSer.getciente()
        .then(usuarios => res.json(usuarios))
        .catch(e => res.status(500).send(e));

   });

    
}