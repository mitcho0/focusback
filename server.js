const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/router');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost/delivereBD',{ 
    
    useNewUrlParser:true,
    useUnifiedtopology:true 
}).then(()=>{
    console.log("Conexão com Mongodb realizada com sucesso")
}).catch((err)=>{
    console.log("erro:conexão com MongoDB não realizada")
})

app.listen(port,function(){
    console.log(`http://localhost:/${port}`)
})
