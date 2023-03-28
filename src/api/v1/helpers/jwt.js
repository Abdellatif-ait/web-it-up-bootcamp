const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}


module.exports = { generateToken, verifyToken };