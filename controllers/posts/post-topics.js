const router = require('express').Router();

// you are here: /posts/api/post-topics
// this is unused and can likely be removed
router.get('/', (req, res) => {
  res.json({ message: 'post-topics' });
});

module.exports = router;
