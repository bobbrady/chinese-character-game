'use strict';

const express = require('express');
const dict = require('../dictionary');
const router = express.Router();

/**
 * Gets a random simplified chinese character's metadtata
 */
router.get('/random', (req, res) => {
  const charIdx = Math.floor(Math.random() * dict.length);
  res.status(200).send(dict[charIdx]);
});

module.exports = router;
