const route= require('express').Router();
const {getProductPage,getEditPage,createHandler,editHandler,deletehandler}= require('../controllers/productController')


route.get('/',getProductPage)
route.get('/edit/:id',getEditPage)

route.post('/',createHandler)
route.post('/edit/:id',editHandler)
route.post('/delete/:id',deletehandler)

module.exports= route