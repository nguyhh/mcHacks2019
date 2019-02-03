const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const router = require('./routes/route');
const path = require('path');
const cors = require('cors');
const router = express.Router();


require('dotenv').config();

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
app.use('/FoodSource', router);//done

// app.use((req, res, next)=>{
//     res.send('Welcome to Express');
// });
app.use(cors());
app.use(bodyParser.json());


app.listen(port, ()=>{
    console.log('Server running on port ' + port)
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route('/').get(function(req,res){//dpne
    foodmap.find(function(err,FoodSource){
        if(err){
            console.log(err);
        } else{
            res.json(FoodSource);
        }
    });
});

router.route('/:id').get(function(req,res){//done
    let id = req.params.id;
    foodmap.findById(id, function(err,food){
        res.json(food);
    });
});
