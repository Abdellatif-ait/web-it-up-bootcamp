const route= require('express').Router()
const productRoute= require('./productRoute')
const userRoute= require('./userRoute')
const authRoute= require('./authRoute')
const isAuth= require('../middlewares/isAuth')

route.get('/',(req,res)=>{
    res.send('this is /api/v1')
})

route.use('/product',isAuth,productRoute)
route.use('/user',userRoute)
route.use('/auth',authRoute)

module.exports=route