const ProductModel= require('../models/productModel')

const getAllProducts= async ()=>{
    try {
        const products= await ProductModel.find()
        return products
    } catch (error) {
        console.log(error.message);
        return null
    }
}

const getOneProduct= async (id)=>{
    try {
        const product= await ProductModel.findById({
            _id:id
        })
        return product
    } catch (error) {
        console.log(error.message);
        return null
    }
}

const createProduct= async({name,description,price})=>{
    try {
        const product = await ProductModel.create({
            name,
            description,
            price:Number(price)
        })
        return product
    } catch (error) {
        console.log(error.message);
        return null
    }
}
const updateProduct= async({id,name,description,price})=>{
    try {
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id:id }, { name, description, price:Number(price) })
        return updatedProduct
    } catch (error) {
        console.log(error.message);
        return null
    }
}

const deleteProduct= async(id)=>{
    try {
        const deletedProduct = await ProductModel.deleteOne({ _id:id })
        return deletedProduct
    } catch (error) {
        console.log(error.message);
        return null
    }
}

module.exports= {getAllProducts,getOneProduct,createProduct,updateProduct,deleteProduct}