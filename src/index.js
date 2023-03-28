const express= require('express')
const bodyParser=require('body-parser')
const morgan= require('morgan')
const path= require('path')
const fs= require('fs')
const v1Router= require('./api/v1/routes/index')
const connectDB= require('./config/dbConfig')
require('dotenv').config()
const app= express();
connectDB();
/*  setup our middlewares   */

// setup morgan to log the requests
app.use(morgan('combined',{stream:fs.createWriteStream(path.join(__dirname, 'logger/access.log'), { flags: 'a' })}));

// setup the body parser to access the req.body sent in the request
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())


/*  Calling our main Route */

app.use('/api/v1',v1Router)


const port= process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})