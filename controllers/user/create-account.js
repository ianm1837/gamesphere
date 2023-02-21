const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('create-account');
});

module.exports = router;