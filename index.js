const express = require('express');
const path = require('path');

const app = express(); 


app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;


app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Tiffany Reyes',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Tiffany Reyes',
    });
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Tiffany Reyes',
    });
});

app.listen(PORT, () => {});