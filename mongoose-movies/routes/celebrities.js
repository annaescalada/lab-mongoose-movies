'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCelebrity = req.body;
    await Celebrity.create(newCelebrity);
    res.redirect('/celebrities');
  } catch (error) {
    res.redirect('/celebrities/new');
  }
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/show', celebrity);
  } catch (error) {
    next(error);
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = req.body;
    await Celebrity.findByIdAndUpdate(id, celebrity);
    res.redirect(`/celebrities`);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/edit', celebrity);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
