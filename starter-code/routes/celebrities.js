const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity');


router.get('/celebrities', (req,res, next)=>{
    Celebrities.find()
    .then((AllCelebrities)=>{
        console.log(AllCelebrities);
        res.render('celebrities/index', {celebrities: AllCelebrities});
    })
    .catch('error');
});

router.get('/celebrities/:celid', (req,res, next)=>{
    celId=req.params.celid;
    Celebrities.findById(celId)
    .then((ThisCel)=>{
    console.log('');
    res.render('celebrities/show', {celebrities:ThisCel})
    })
    .catch('error');
})
module.exports = router;