var express = require('express');
var router = express.Router();

const messages = [
  {
    title: 'Hello',
    text: 'Hello, my name is Bob',
    user: 'Bob',
    added: new Date()
  },
  {
    title: 'Hi!',
    text: 'Hi! My name is Susan',
    user: 'Susan',
    added: new Date()
  }
];

router.get('/', (req, res) => {
  res.render('index', {
    messages
  });
});

module.exports = router;
