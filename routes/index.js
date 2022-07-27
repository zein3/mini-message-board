var express = require('express');
var router = express.Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
  const messages = await Message.findAll({
    order: [['updatedAt', 'DESC']]
  });

  res.render('index', {
    messages
  });
});

module.exports = router;
