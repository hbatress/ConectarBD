const express = require('express');
const app=express();
const port=3003;
const routerPAI=require('./routers')

app.get('/',(req,res)=>{
    res.send('Hola mi server umg');
});

app.get('/productos',(req,res)=>{
    res.json([{
        Nombre:'Computadora Dell',
        precio: 1234,
    },
    {
        Nombre:'Iphone 13 Pro max',
        Precio:10000,
    }])
})
app.get('/Pr,oducto/:id',(req,res)=>{
    const { id }=req.params;
    res.json([{
        id:1,
    nombre:'Computadora Dell',
    precio: 2500,
    }],
    [
    {
            id:2,
            nombre:'Iphone 13 Normal',
            precio: 500,
    }])
})
app.get('/nueva_ruta',(req,res)=>{
    res.json('pura Perdida')
})
app.listen(port,()=>{
    console.log(`escuchando en ${port}`);
})