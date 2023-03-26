const {getAllProducts,getOneProduct,createProduct,updateProduct,deleteProduct}= require('../services/productService')
const {validateProduct}= require('../validations/inputValidation')
const getAllHandler=async(req,res)=>{
    // call the service
    const products= await getAllProducts();
    if(!products){
        return res.status(500).json({
            status:500,
            message:"Internal Server Error, Try again!",
            data:null
        })
    }
    res.status(200).json({
        status:200,
        message:"Here's the product list",
        data:products
    })
}

const getOneHandler=async (req,res)=>{
    //get id from the params
    const {id} = req.params
    // Call service
    const product= await getOneProduct(id)
    if(!product){
        return res.status(400).json({
            status:400,
            message:"Product not found, provide a valide ID",
            data:null
        })
    }
    res.status(200).json({
        status:200,
        message:"Here's the product with the id provided",
        data:product
    })
}
const postHandler=async (req,res)=>{
    // req.body: {name,description,price}
    const {name,description,price}= req.body
    //call the validation
    const isValidate= validateProduct({name,description,price})
    //if not valide return error
    if(!isValidate){
        return res.status(400).json({
            status:400,
            message:"invalide product! please provide valide inputs",
            data:null
        })
    }

    //call service
    const newProduct= await createProduct({name,description,price})
    if(!newProduct){
        return res.status(400).json({
            status:400,
            message:"creation failed! please provide valide inputs",
            data:null
        })
    }
    
    res.status(201).json({
        status:201,
        message:"product created!",
        data:newProduct
    })

}
const putHandler=async (req,res)=>{
    const {id}= req.params;
    const {name,description,price}= req.body
    // call the validation
    const isValidate= validateProduct({name,description,price})
    if(!isValidate){
        return res.status(400).json({
            status:400,
            message:"invalide product! please provide valide inputs",
            data:null
        })
    }
    //call service
    const updatedProduct= await updateProduct({id,name,description,price})
    if(!updatedProduct){
        return res.status(400).json({
            status:400,
            message:"update failed! please provide valide inputs",
            data:null
        })
    }
    res.status(200).json({
        status:200,
        message:"product updated!",
        data:updatedProduct
    })

}
const deleteHandler=async (req,res)=>{
    // get id form req.params
    const {id}= req.params
    //call service
    const deletedProduct= await deleteProduct(id)
    if(!deletedProduct){
        return res.status(400).json({
            status:400,
            message:"delete failed! please provide valide inputs",
            data:null
        })
    }
    res.status(200).json({
        status:200,
        message:"product deleted!",
        data:deletedProduct
    })
}

module.exports={getAllHandler,getOneHandler,postHandler,putHandler,deleteHandler}