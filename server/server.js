require('./config/config');

const express = require('express');
const app = express();

//creamos el vinculo con la rutas de usuarios
app.use(require('./routers/usuarios'));

//creamos conection con mongoose
const mongoose = require('mongoose');

//declaramos el porto como costante 
const port = process.env.PORT || 3000;

//declaramos el parser 
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    //res.send('Buenos dias a todos');
    //creamos un archivo json
    res.json('Buenos dias a todos en Local');
});



//creamos conection
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw new Error('Conession no establesida ' + err);
    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el porto: ${process.env.PORT}`);

});