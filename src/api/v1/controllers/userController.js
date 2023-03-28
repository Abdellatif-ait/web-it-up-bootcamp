const { getAllUsers, getOneUser } = require('../services/userService');

const getAllHandler = async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json({
        status: 200,
        message: 'Users fetched successfully',
        data: users
    });
}

const getOneHandler = async (req, res) => {
    const { id } = req.params;
    const user = await getOneUser(id);
    if (!user) {
        return res.status(400).json({
            status: 400,
            message: 'User not found, Provide a valid id',
            data: null
        })
    }
    res.status(200).json({
        status: 200,
        message: 'User fetched successfully',
        data: user
    })
}

module.exports = { getAllHandler, getOneHandler };