function adminMiddleware(req, res, next) {
	try {
		// Verify admin
		const isAdmin = req.user.isAdmin;

		if (!isAdmin) {
			throw Error("You are not Admin!");
		}

		next();
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

module.exports = adminMiddleware;
