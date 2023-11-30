const express = require("express");
const { request } = require("http");

const app = express()

app.get('/', (req, res) =>{
    res.send("Ola mundo")
})

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000!")
})