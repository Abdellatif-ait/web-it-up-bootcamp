const route= require('express').Router();
const {getAllHandler,getOneHandler,postHandler,putHandler,deleteHandler}= require('../controllers/productController')

/*  Assign to each sub route a main function (endpoint handler) */

route.get('/',getAllHandler)
route.get('/:id',getOneHandler)
route.post('/',postHandler)
route.put('/:id',putHandler)
route.delete('/:id',deleteHandler)

module.exports= route