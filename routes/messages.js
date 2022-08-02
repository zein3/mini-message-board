const express = require('express');
const { check, validationResult } = require('express-validator');
const Message = require('../models/message');
let router = express.Router();

/* New Message Form */
router.get('/new', (req, res) => {
  res.render('message', {
    form: {
      username: "",
      title: "",
      message: ""
    }
  });
});

router.post('/new',
  // Method 1
  // check('username').exists({ checkFalsy: true }).withMessage('You must have a username'),
  // check('title').exists({ checkFalsy: true }).withMessage('There must be a title'),
  // check('message').isLength({ min: 5 }).withMessage('Message must contain at least 5 characters'),
  async (req, res, next) => {
    // Method 2: Parallel
    const validations = [
      check('username').exists({ checkFalsy: true }).withMessage('You must have a username'),
      check('title').exists({ checkFalsy: true }).withMessage('There must be a title'),
      check('message').isLength({ min: 5 }).withMessage('Message must contain at least 5 characters'),
    ];
    await Promise.all(validations.map(validation => validation.run(req)));

    // Method 2: Sequential
    // await check('username').exists({ checkFalsy: true }).withMessage('You must have a username').run(req);
    // await check('title').exists({ checkFalsy: true }).withMessage('There must be a title').run(req);
    // await check('message').isLength({ min: 5 }).withMessage('Message must contain at least 5 characters').run(req);

    const results = validationResult(req);
    console.log(results.errors);

    if (!results.isEmpty()) {
      res.render('message', {
        errors: results.errors,
        form: {
          username: req.body.username,
          title: req.body.title,
          message: req.body.message
        },
      });
      return;
    }

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
  }
);

module.exports = router;
