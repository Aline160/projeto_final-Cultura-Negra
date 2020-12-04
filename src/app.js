const dotenvSafe= require('dotenv-safe').config();

const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();


mongoose.connect(process.env.MONGODB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;


db.on("error", console.log.bind(console, "iiiiii, deu ruim:"))
db.once("open", function (){
  console.log("Deu Certo!! Massa!!!!!")
})

const index = require ('./routes/index')
const moda = require ('./routes/modaRouter');
//const livros = require ("./routes/livrosRouter");


app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

app.use (express.static('public'));

app.use ('/',index);
app.use ('/moda', moda)
//app.use('/livros',livros)



module.exports= app