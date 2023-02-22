const router = require('express').Router();

// you are here: /user/api/logout
router.post('/', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'Logout success!' }).end();
    });
  } else {
    res.status(404).json({ message: "You weren't logged in..." }).end();
  }
});

module.exports = router;
