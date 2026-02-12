const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next) {
    const token = req.headers.token;

    if(!token) {
        return res.status(401).json({ error: "Unauthorized access, token is missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch(e) {
        return res.status(401).json({ error: "Unauthorized access, invalid token" });
    }
}

module.exports = {
    userMiddleware
}