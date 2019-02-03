const express = require ('express');
const router = express.Router();
const foodMap = require('../models/foodmap');

router.get('/todos', (req, res, next) => {

    //return all the data
    foodMap.find({}, 'location')
        .then(data => res.json(data))
        .catch(next)

});

router.post('/todos', (req, res, next) => {
    if(req.body.location){
        foodMap.create(req.body)
        .then(data=> res.json(data))
        .catch(next)
    }else{
        res.json({
            error: "The input field is invalid"
        })
    }
});

router.delete('/todos/:id', (req, res, next) => {
    foodMap.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;