const router = require('express').Router();
const { Posts } = require('../../../models');

// you are here: /posts/api/create-post
router.post('/', async (req, res) => {
  try {
    Posts.create({
      user_id: req.session.user_id,
      game_id: req.body.postGame,
      username: req.session.username,
      title: req.body.postTitle,
      content: req.body.postContent,
    })
      .then((dbPostData) => {
        res.json(dbPostData).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

    console.log('req.body: ', req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
