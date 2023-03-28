
const validateProduct = ({ name, description, price }) => {
    return name && description && price
}

const validateUser = ({ username, email, password }) => {
    // password must be at least 6 characters long
    const isValidPassword = validatePassword(password);
    // email must be a valid email address
    const isValidEmail = validateEmail(email);
    // name must be at least 3 characters long
    const isValidName = validateName(username);

    return isValidName && isValidEmail && isValidPassword
}

const validateUserLogin = ({ email, password }) => {
    // password must be at least 6 characters long
    const isValidPassword = validatePassword(password);
    // email must be a valid email address
    const isValidEmail = validateEmail(email);

    return isValidEmail && isValidPassword
}

const validateEmail = (email ) => {
    // email must be a valid email address
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    return isValidEmail
}

const validatePassword = ( password ) => {
    // password must be at least 6 characters long
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const isValidPassword = passwordRegex.test(password);
    return isValidPassword
}

const validateName = ( name ) => {
    // name must be at least 3 characters long
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const isValidName = nameRegex.test(name);
    return isValidName
}

module.exports = { validateProduct, validateUser , validateUserLogin}