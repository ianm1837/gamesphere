const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('preferences');
});

module.exports = router;