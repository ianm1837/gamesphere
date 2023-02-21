const router = require('express').Router();


// you are here: /posts/api/create-comment
router.get('/', (req, res) => {
  res.json({ message: "this is the create comment api"})
});

module.exports = router;
