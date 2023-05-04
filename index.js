const express = require('express');
const path = require('path');

const app = express(); 


app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Tiffany Reyes',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Tiffany Reyes',
    });
});

app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Tiffany Reyes',
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Tiffany Reyes',
    });
});

app.get('/database-diagrams', (req, res) => {
    res.render('database-diagrams', {
        title: 'Tiffany Reyes',
    });
});

app.get('/api-unit-tests', (req, res) => {
    res.render('api-unit-tests', {
        title: 'Tiffany Reyes',
    });
});

app.listen(PORT, () => {});