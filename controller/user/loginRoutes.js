//  cridder 20230208201150
//login handler
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
	} else {
		res.render("login");
	}
});
