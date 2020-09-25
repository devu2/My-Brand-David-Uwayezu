const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const queriesRoutes = require('./routes/queriesRoutes')


const app = express();
mongoose.connect('mongodb://localhost/myBrandDavid',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
    console.log('Connected')
})
app.use(express.json());
app.use(blogRoutes);
app.use(queriesRoutes)

app.listen(5500);