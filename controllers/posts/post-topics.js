const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({message: 'post-topics'});
});

module.exports = router;