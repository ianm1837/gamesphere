// added by chris ridder for 2fa - 20230211130618
// >
app.get("/api/2fa", (req, res) => {
	res.json({ message: "Welcome to the two factor authentication example" });
});

app.post("/api/2fa/register", (req, res) => {
	const id = uuid.v4();
	try {
		const path = `/user/${id}`;
		// Create temporary secret until it it verified
		const temp_secret = speakeasy.generateSecret();
		// Create user in the database
		db.push(path, { id, temp_secret });
		// Send user id and base32 key to user
		res.json({ id, secret: temp_secret.base32 });
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: "Error generating secret key" });
	}
});

app.post("/api/2fa/verify", (req, res) => {
	const { userId, token } = req.body;
	try {
		// Retrieve user from database
		const path = `/user/${userId}`;
		const user = db.getData(path);
		console.log({ user });
		const { base32: secret } = user.temp_secret;
		const verified = speakeasy.totp.verify({
			secret,
			encoding: "base32",
			token,
		});
		if (verified) {
			// Update user data
			db.push(path, { id: userId, secret: user.temp_secret });
			res.json({ verified: true });
		} else {
			res.json({ verified: false });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving user" });
	}
});

app.post("/api/2fa/validate", (req, res) => {
	const { userId, token } = req.body;
	try {
		// Retrieve user from database
		const path = `/user/${userId}`;
		const user = db.getData(path);
		console.log({ user });
		const { base32: secret } = user.secret;
		// Returns true if the token matches
		const tokenValidates = speakeasy.totp.verify({
			secret,
			encoding: "base32",
			token,
			window: 1,
		});
		if (tokenValidates) {
			res.json({ validated: true });
		} else {
			res.json({ validated: false });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving user" });
	}
});
//  <
// added by chris ridder for 2fa - 20230211130618