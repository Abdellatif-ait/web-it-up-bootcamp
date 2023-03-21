const data= [
    {
        id:0,
        name:"product0",
        description:"product 0",
        price:150
    },
    {
        id:1,
        name:"product1",
        description:"product 1",
        price:150
    },
    {
        id:2,
        name:"product2",
        description:"product 2",
        price:150
    },
]

const getProductPage=(req,res)=>{
    res.render('product',{products:data})
}

const getEditPage=(req,res)=>{
    const {id}= req.params
    res.render('editProduct',{product:data[id]})
}
const createHandler=(req,res)=>{
    const {name,description,price}=req.body
    data.push({
        id:data.length,
        name,
        description,
        price
    })
    res.redirect('/product')

}
const editHandler=(req,res)=>{
    const {id}= req.params
    const {name,description,price}=req.body
    data[id]={id,name,description,price}
    res.redirect('/product')
}
const deletehandler=(req,res)=>{
    const {id}= req.params
    data.splice(id,1)
    res.redirect('/product')
}

module.exports={getProductPage,getEditPage,createHandler,editHandler,deletehandler}