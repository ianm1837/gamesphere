const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('post-details');
});

module.exports = router;
