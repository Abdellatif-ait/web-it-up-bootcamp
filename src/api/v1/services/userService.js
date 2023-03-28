const UserModel= require('../models/userModel')

const getAllUsers= async ()=>{
    try {
        const users= await UserModel.find()
        return users
    } catch (error) {
        console.log(error.message);
        return null
    }
}

const getOneUser= async (id)=>{
    try {
        const user= await UserModel.findById(id)
        return user
    } catch (error) {
        console.log(error.message);
        return null
    }
}

module.exports= {getAllUsers, getOneUser}