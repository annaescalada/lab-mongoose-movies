'use strict';

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render('movies/index', { movies });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newMovie = req.body;
    await Movie.create(newMovie);
    res.redirect('/movies');
  } catch (error) {
    res.redirect('/movies/new');
  }
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    res.render('movies/show', movie);
  } catch (error) {
    next(error);
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    await Movie.findByIdAndUpdate(id, movie);
    res.redirect(`/movies`);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndRemove(id);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const movie = await Movie.findById(id);
    res.render('movies/edit', movie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
