const dotenv=require('dotenv')
const express=require('express')
const app=express();


dotenv.config({path: './config.env'})
//linking router files
app.use(express.json())


app.use(require('./router/auth'))
//database setup
const PORT=process.env.PORT
require('./db/connection')
//Middleware





// app.get('/about',middleware,(req,res)=>{
// res.send('about page')
// })
// app.get('/contact',(req,res)=>{
//     res.send('contact page')
//     })
    app.get('/sigin',(req,res)=>{
        res.send('signin page')
        })
    app.get('/login',(req,res)=>{
            res.send('login page')
            })
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})