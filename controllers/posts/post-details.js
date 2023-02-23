const router = require('express').Router();
const { Posts, User, Games, Comments } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
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

    const posts = dbCommentsData.map((post) => post.get({ plain: true }));

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
