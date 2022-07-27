const express = require('express');
let router = express.Router();

/* New Message Form */
router.get('/new', (req, res) => {
  res.render('message');
});

router.post('/new', (req, res) => {

});

module.exports = router;
