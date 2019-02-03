const express = require ('express');
const router = express.Router();
const FoodSource = require('../models/foodmap');

const product_controller= require('../controllers/product.controller');

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


module.exports = router;