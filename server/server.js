require('./config/config');

const express = require('express');
const app = express();
//declaramos el porto como costante 
const port = process.env.PORT || 3000;
//declaramos el parser 
const bodyParser = require('body-parser');

//configuaraciones 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function(req, res) {
    //res.send('Buenos dias a todos');
    //creamos un archivo json
    res.json('Buenos dias a todos');
});

app.get('/usuarios', (req, res) => {
    // let cuerpopeticion=req.body;
    res.json('Listas Usuarios');
});

app.post('/usuarios', (req, res) => {
    let peticion = req.body;
    if (peticion.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario',
        });
    } else {
        //cambio respuesta
        // res.json('Pagina Post usuarios');
        res.json({
            body: peticion
        });

    }


});
app.put('/usuarios', (req, res) => {
    res.json('Pagina Put Usuarios');
});
app.put('/usuarios/:id', (req, res) => {
    let idUsuario = req.params.id;
    res.json({
        id: idUsuario,

    });
})
app.delete('/usuarios', (req, res) => {
    res.json('Pagina Delete Usuarios');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el porto: ${process.env.PORT}`);

});