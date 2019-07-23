// 'use strict';

// const Celebrity = require('../models/Celebrity');
// const mongoose = require('mongoose');

// const arr = [{ name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'I am short' }, { name: 'Kim Kardashian', occupation: 'unknown', catchPhrase: 'Oh my gosh' }, { name: 'Messi', occupation: 'unknown', catchPhrase: 'I am short too' }];

// mongoose.connect('mongodb://localhost/celebrities', {
//   keepAlive: true,
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE
// });

// const createCelebrities = async (arr) => {
//   try {
//     await Celebrity.create(arr);
//     mongoose.connection.close();
//   } catch (error) {
//     console.log(error);
//   }
// };

// createCelebrities(arr);

'use strict';

const Movie = require('../models/Movie');
const mongoose = require('mongoose');

const arr = [{ title: 'El rey león', genre: 'aventuras', plot: 'Un león que es rey' }, { title: 'Star Wars', genre: 'aventuras', plot: 'Una guerra en las galaxias' }, { title: 'Superman', genre: 'superheroes', plot: 'Un super hombre que vuela' }];

mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const createMovies = async (arr) => {
  try {
    await Movie.create(arr);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

createMovies(arr);
