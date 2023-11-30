const express = require("express");
const exphbs = require("express-handlebars")
const { request } = require("http");

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view enigine', 'handlebars')

app.get('/', (req, res) =>{
    res.send("Ola mundo")
})

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000!")
})