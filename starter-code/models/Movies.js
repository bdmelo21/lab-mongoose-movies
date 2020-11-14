const mongoose = require('mongoose');
const {Schema, model}= mongoose; 

const moviesSchema = new Schema ({
    title: String, 
    genre: String, 
    plot: String
  },
  {
    timestamps:true
  });
 
  module.exports= model('Movies', moviesSchema);