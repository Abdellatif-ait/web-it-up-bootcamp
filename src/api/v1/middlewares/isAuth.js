const {verifyToken}= require('../helpers/jwt');

const isAuth = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized",
            data: null
        })
    }
    const token = header.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized",
            data: null
        })
    }
    const user = {
        id: decoded.id,
        username: decoded.username,
        email: decoded.email
    }
    req.user = user;
    next();
}

module.exports = isAuth;