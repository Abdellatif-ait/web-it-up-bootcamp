const { validateUser, validateUserLogin } = require("../validations/inputValidation");
const { loginUser, registerUser } = require("../services/authService");
const { generateToken } = require("../helpers/jwt");

const registerHandler = async (req, res) => {
    const { username, email, password } = req.body;
    // pass the username, email, and password to the validate function
    const isValide = validateUser({ username, email, password });

    if (!isValide) {
        return res.status(400).json({
            status: 400,
            message: "Invalid credentials,Please provide a valid username, email, and password",
            data: null
        })
    }

    // pass the username, email, and password to the register service

    const user = await registerUser({ username, email, password });

    if (!user) {
        return res.status(400).json({
            status: 400,
            message: "User already exists",
            data: null
        })
    }

    // generate a token
    const token = generateToken(user);

    // send the token to the client
    return res.status(200).json({
        status: 200,
        message: "User registered successfully",
        data: token
    })
}

const loginHandler = async (req, res) => {
    const { email, password } = req.body;

    // pass the email and password to the validate function
    const isValide = validateUserLogin({ email, password });

    if (!isValide) {
        return res.status(400).json({
            status: 400,
            message: "Invalid credentials",
            data: null
        })
    }

    // pass the email and password to the login service
    const user = await loginUser({ email, password });

    if (!user) {
        return res.status(400).json({
            status: 400,
            message: "Failed! Invalid credentials",
            data: null
        })
    }

    // generate a token
    const token = generateToken(user);

    // send the token to the client
    return res.status(200).json({
        status: 200,
        message: "User logged in successfully",
        data: token
    })
}

module.exports = { loginHandler, registerHandler };