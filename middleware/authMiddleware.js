require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            res.status(403).json({message: "User not authorized"});
        }
        const decodedData = jwt.verify(token, process.env.SECRET);
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error)
        return res.status(403).json({message: "User not authorized"});
    }
}