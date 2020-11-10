const mongoose = require('mongoose');
const celebrity = require('../models/celebrity.js');
mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
const celebrities = [
    { name: 'Bernardo de Melo', ocuppation: 'the best', catchPhrase:'Im the best!'},
    { name: 'John The Man', ocuppation:'the other best', catchPhrase:'Im the other best!'},
    { name: 'John The Other Man', ocuppation: 'the other other best', catchPhrase:'Im the other other best and I like french fries'}
  ];
 celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating dronesfrom the DB: ${err}`));