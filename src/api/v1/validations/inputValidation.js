
const validateProduct= ({name,description,price})=>{
    return name && description && price
}


module.exports= {validateProduct}