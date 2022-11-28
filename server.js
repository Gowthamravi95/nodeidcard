const express=require('express')
const dotenv=require('dotenv')
const bodyparser=require('body-parser')
const path=require('path')
const router= require('./server/routes/router')
const connectDB=require("./server/database/connection")

const app =express();

dotenv.config({path: 'config.env'})
PORT=process.env.PORT || 8080

connectDB()

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine',"ejs");

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.use('/',router)
app.listen(PORT,()=>{
    console.log(`server is running on  http://localhost:${PORT}`)
})