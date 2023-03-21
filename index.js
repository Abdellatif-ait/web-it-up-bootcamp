const express= require('express');
const createError= require('http-errors')
const productRoute= require('./src/routes/productRoute')
const morgan= require('morgan')
const path= require('path')
const bodyParser= require('body-parser')

const app = express();

    
// setup ejs
app.use(morgan('dev'))

app.set('views',path.join(__dirname,'src/views'))
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({
    extended:true
}))


app.get('/',(req,res)=>{
    res.render('home',{title:"home page"})
})

app.use('/product',productRoute)



// middlewares

app.use((req,res,next)=>{
    next(new createError.NotFound())
})

app.use((err,req,res,next)=>{
    res.status= err.status||500;
    res.send({
        status:err.status||500,
        message:err.message
    })
})

app.listen(3000,()=>{
    console.log('server is running, hello from the web it up bootcamp');
})