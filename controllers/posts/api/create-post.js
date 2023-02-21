const router = require('express').Router();


// you are here: /posts/api/create-post
router.get('/', (req, res) => {
  res.json({ message: "this is the create post api"})
});

module.exports = router;