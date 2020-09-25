const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect('mongodb://localhost/myBrandDavid',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
    console.log('Connected')
})
app.use(express.json());
app.use(routes);


app.listen(5500);