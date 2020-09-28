const dotenv = require('dotenv');
dotenv.config();
const jwtStrategy = require('./config/passport');
const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');




const app = express();
mongoose.connect('mongodb://localhost/myBrandDavid',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
    console.log('database Connected successfully!')
})
app.use(passport.initialize());
passport.use(jwtStrategy)
app.use(express.json());
app.use(routes);


app.listen(5500);