const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));

//app.use(express.static('../public'));

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
});

app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});
app.listen(PORT, ()=>{
    console.log("Escuchando en http://localhost:" + PORT + ' exitosamente!');
});