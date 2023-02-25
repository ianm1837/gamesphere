const router = require('express').Router();
const multerUpload = require('./../../../config/multerUpload');
const { Games } = require('./../../../models');

// you are here: /games/api/create-game
router.post('/', multerUpload.single('image'), async (req, res) => {
  // create a new game with the data from the form
  // send generic error message if there is an error
  try {
    Games.create({
      user_id: req.session.user_id,
      title: req.body.newGameTitle,
      description: req.body.newGameDescription,
      game_image: req.file.location,
    });

    // send the user the desired url as json
    res.json({ url: '/games' });
  } catch {
    res.status(500).json({ message: 'Error creating game' });
  }
});

module.exports = router;
