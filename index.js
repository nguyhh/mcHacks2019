const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/route');
const path = require('path');

require('dotenv').config();
// db = mongoose.createConnection('mongodb://user:pass@localhost:port/database');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'conenction error'));
db.once('open', function(){
    console.log("Connected to DB");
})

const app = express();

const port = process.env.PORT || 5000;

// connect to database
mongoose.connect("mongodb+srv://admin:admin@cluster0-ekg57.mongodb.net/admin",{ useNewUrlParser: true });



//since mongoose promise is depreciated??
mongoose.Promise = global.Promise;

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use('/route', routes);

app.use((req, res, next)=>{
    res.send('Welcome to Express');
});

app.use('/products', product);

app.listen(port, ()=>{
    console.log('Server running on port ' + port)
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});