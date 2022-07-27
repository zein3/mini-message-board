const express = require('express');
const Message = require('../models/message');
let router = express.Router();

/* New Message Form */
router.get('/new', (req, res) => {
  res.render('message');
});

router.post('/new', async (req, res, next) => {
  try {
    await Message.create({
      user: req.body.username,
      title: req.body.title,
      message: req.body.message
    });
    res.redirect('/');
  } catch(err) {
    next(err);
  }

});

module.exports = router;
