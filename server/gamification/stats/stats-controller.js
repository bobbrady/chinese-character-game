'use strict';

const express = require('express');
const router = express.Router();

/**
 * Gets the game stats for a given user Id
 */
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).send({ userId });
});

module.exports = router;
