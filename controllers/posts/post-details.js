const router = require('express').Router();
const { Posts, User, Games, Comments } = require('../../models');

// you are here: /posts/details/:id
router.get('/:id', async (req, res) => {
  try {
    // find the post by id
    const dbCommentsData = await Posts.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    // remove metadata and map to a new array
    const posts = dbCommentsData.map((post) => post.get({ plain: true }));

    // send the post data to handlebars and render the page
    res.render('post-details', {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
