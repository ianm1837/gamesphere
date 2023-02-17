const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('auth');
});

module.exports = router;
