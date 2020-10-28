const router = require('express').Router();

const imdbRoutes = require('./imdb');

router.use('/imdb', imdbRoutes);

module.exports = router;