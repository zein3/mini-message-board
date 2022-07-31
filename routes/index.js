var express = require('express');
var router = express.Router();
const { DateTime } = require('luxon');
const Message = require('../models/message');

router.get('/', async (req, res) => {
  const results = await Message.findAll({
    order: [['updatedAt', 'DESC']],
    raw: true
  });

  const messages = results.map(message => {
    return {
      ...message,
      updatedAt: DateTime.fromJSDate(message.updatedAt).toLocaleString(DateTime.DATETIME_MED)
    }
  });

  res.render('index', {
    messages
  });
});

module.exports = router;
