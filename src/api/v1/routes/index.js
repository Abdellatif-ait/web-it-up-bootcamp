const route= require('express').Router()
const productRoute= require('./productRoute')

route.get('/',(req,res)=>{
    res.send('this is /api/v1')
})

route.use('/product',productRoute)

module.exports=route