const router = require('express').Router();
const multer = require('multer');
const { Games } = require('./../../../models');

// Set up multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/game-images/');
  },
  filename: function (req, file, cb) {
    function generateRandomString(length) {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < length; i++) {
        const charIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(charIndex);
      }

      return result;
    }

    let randomFileName = generateRandomString(32);
    const extension = file.originalname.split('.').pop();

    cb(null, `${randomFileName}.${extension}`);
  },
});

const uploads = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
});

router.post('/', uploads.single('image'), (req, res, next) => {
  // req.file contains the uploaded file
  Games.create({
    user_id: req.session.user_id,
    title: req.body.newGameTitle,
    description: req.body.newGameDescription,
    game_image: req.file.filename,
  });

  console.log('This is the file body object: ' + JSON.stringify(req.file));
  console.log(
    'This is the game title: ' + JSON.stringify(req.body.newGameTitle)
  );
  console.log('This is the game description: ' + req.body.newGameDescription);
});

module.exports = router;
