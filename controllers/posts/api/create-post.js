const router = require('express').Router();
const { Posts } = require('../../../models');

// you are here: /posts/api/create-post
router.post('/', async (req, res) => {
  try {
    // create a new post with the data from the form
    Posts.create({
      user_id: req.session.user_id,
      game_id: req.body.postGame,
      username: req.session.username,
      title: req.body.postTitle,
      content: req.body.postContent,
    });

    // send the user the desired url as json (refresh the page)
    res.status(200).json({ url: '/games/details/' + req.body.postGame });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error creating post' });
  }
});

module.exports = router;
