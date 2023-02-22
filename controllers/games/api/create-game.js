const router = require('express').Router();
const multerUpload = require('./../../../config/multerUpload');
const { Games } = require('./../../../models');

router.post('/', multerUpload.single('image'), (req, res) => {
  Games.create({
    user_id: req.session.user_id,
    title: req.body.newGameTitle,
    description: req.body.newGameDescription,
    game_image: req.file.location,
  });

  console.log('uploaded file: ', req.file);
  res.redirect('/games');
});

module.exports = router;
