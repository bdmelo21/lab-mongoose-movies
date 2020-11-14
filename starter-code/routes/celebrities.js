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


router.get('/celebrities/new', (req,res)=>{
    Celebrities.find()
    .then((AllCelebrities)=>{
    res.render('celebrities/new', {celebrities: AllCelebrities} );
})
});

router.post('/celebrities/new', (req, res, next)=>{
    let {name, occupation, catchPhrase} = req.body;
    Celebrities.create ({
        name, occupation, catchPhrase
    }).then(()=>{
        console.log('hsjfhajbs');
        res.redirect('/celebrities');
    })
})

router.get('/celebrities/:celid', (req,res, next)=>{
    let celId=req.params.celid;
    Celebrities.findById(celId)
    .then((ThisCel)=>{
    console.log('');
    res.render('celebrities/show', {celebrities:ThisCel})
    })
    .catch('error');
})
router.post('/celebrities/:Id/delete', (req,res)=>{
    let Id=req.params.Id;
    Celebrities.findByIdAndDelete(Id)
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch('error');
})
router.get('/celebrities/:id/edit', (req,res)=>{
    let Id=req.params.id;
    Celebrities.findById(Id)
    .then ((thisCel)=>{
        res.render('celebrities/edit', {celebrities:thisCel} )
    })
    .catch('error');
});
router.post('/celebrities/:id/edit', (req,res)=>{
    let Id=req.params.id;
    let {name, occupation, catchPhrase} = req.body;
    Celebrities.findByIdAndUpdate(Id,{
        name,
        occupation, 
        catchPhrase
      }).then(()=>{
        res.redirect('/celebrities')
      });
});

module.exports = router;