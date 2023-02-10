//  cridder 20230208201121
const isAuth = (req, res, next) => {
	if (req.session.loggedIn) {
		console.log("still logged in");
		next();
	} else {
		res.redirect("/login");
	}
};

module.exports = isAuth;
