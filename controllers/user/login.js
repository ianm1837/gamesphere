const router = require("express").Router();

router.get("/", (req, res) => {
  // get the users login status and username
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  // render the login page with handlebars
  // pass the login status and username to the template
  res.render("login", {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;
