require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;




// Handlebars
app.set('view engine', 'hbs'); // para renderizar vistas sencillas en el frontend // npm handlebars.js/hbs // librearia sencilla para proyectos pequeños
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') ); // su path es /

// este es remplazado por el path de arriba, el public tiene prioridad
// app.get('/', (req, res) => {
//   res.send('Home Page')
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('home', {
        nombre: 'Fernando herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('home', {
        nombre: 'Fernando herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})