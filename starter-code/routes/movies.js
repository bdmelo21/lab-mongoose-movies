const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies.js');


router.get('/movies', (req,res, next)=>{
    Movies.find()
    .then((AllMovies)=>{
        res.render('movies/index', {movies: AllMovies});
    })
    .catch('error');
});


router.get('/movies/new', (req,res)=>{
    Movies.find()
    .then((AllMovies)=>{
    res.render('movies/new', {movies: AllMovies} );
})
});

router.post('/movies/new', (req, res, next)=>{
    let {title, genre, plot} = req.body;
    Movies.create ({
        title, genre, plot
    }).then(()=>{
        res.redirect('/movies');
    })
})

router.get('/movies/:movieid', (req,res, next)=>{
    let MovId=req.params.movieid;
    Movies.findById(MovId)
    .then((ThisCel)=>{
    console.log('');
    res.render('movies/show', {movies:ThisCel})
    })
    .catch('error');
})
router.post('/movies/:Id/delete', (req,res)=>{
    let Id=req.params.Id;
    Movies.findByIdAndDelete(Id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch('error');
})
router.get('/movies/:id/edit', (req,res)=>{
    let Id=req.params.id;
    Movies.findById(Id)
    .then ((thisCel)=>{
        res.render('movies/edit', {movies:thisCel} )
    })
    .catch('error');
});
router.post('/movies/:id/edit', (req,res)=>{
    let Id=req.params.id;
    let {title, genre, plot} = req.body;
    Movies.findByIdAndUpdate(Id,{
        title,
        genre, 
        plot
      }).then(()=>{
        res.redirect('/movies')
      });
});

module.exports = router;