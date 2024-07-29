//importar librerias

const express = require('express');
const knex = require('./db');//llamado a conf de db
const routes = require('./routes');//llamado rutas

const app = express();// cremaos una nueva instancia
const port = 3000;// puerto de salida 


app.use(express.json()) //configurar tipo de dato js
app.use('/api', routes);//configura la url base y tutas

app.use(express.static('public'));

//URL base y rutas 
app.use('/api', routes);

//404
app.use((req, res, next) => {
    res.status(404).send('page not found');
});

//errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(port, () => { //API por el puerto 3001
    console.log(`Servidor corriendo en el puerto ${port}`);
});






