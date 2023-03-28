const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const loginUser = async ({ email, password }) => {
    try {
        // find the user by email
        const user = await UserModel.findOne({ email });
        // if the user does not exist, return null
        if (!user) {
            return null;
        }
        // compare the password with the hashed password
        const isMatch = bcrypt.compare(password, user.password);
        // if the password does not match, return null
        if (!isMatch) {
            return null;
        }
        // return the user
        return user;
    } catch (error) {
        console.log(error.message);
        return null;
    }

}
const registerUser = async ({ username, email, password }) => {
    try {
        // find the user by email
        let user = await UserModel.findOne({ email });
        // if the user exists, return null
        if (user) {
            return null;
        }
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // create a new user
        user = new UserModel({
            username,
            email,
            password: hashedPassword
        });
        // save the user
        await user.save();
        // return the user
        return user;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

module.exports = { loginUser, registerUser };