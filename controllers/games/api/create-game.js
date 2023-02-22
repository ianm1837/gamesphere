const router = require('express').Router();
const multer = require('multer');
const { Games } = require('./../../../models');

// Set up multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/game-images/');
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname.split('.')[0];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split('.').pop();

    cb(null, `${originalName}-${uniqueSuffix}.${extension}`);
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
  // Games.create({
  //   user_id: req.session.username,

  // })

  console.log('This is the file body object: ' + JSON.stringify(req.file));
});

module.exports = router;
