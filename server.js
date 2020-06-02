const express = require('express')
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));

//express engine HBS
app.set('view engine', 'hbs');
const port = process.env.PORT || 3000;

//helpers Variables comunes
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lizeth'
    })
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => { console.log(`Escuchando puerto ${port}`); })