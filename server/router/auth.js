const mongoose=require('mongoose')
const express=require('express');
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')
const authenticate =require('../middleware/authenticate')

const router=express.Router();
require('../db/connection')
const User =require('../model/userSchema')

router.get('/',(req,res)=>{
    res.send('Hello world to server from router.js')
})
const cookieParser=require('cookie-parser');
router.use(cookieParser())
//using promises
// router.post('/register',async(req,res)=>{
// // console.log(req.body);
// // res.json({messsage:req.body})
// const {name,email,phone,work,password,cpassword}=req.body

// if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
// return res.status(422).json({error:'plz fill all details!'})
// }
// User.findOne({email:email})


// .then((userExist)=>{if(userExist){
//     return res.status(433).json({error:"Email already exist"})
// }
// const user =new User({name,email,phone,work,password,cpassword});

// user.save().then(()=>{
//     res.status(201).json({message:'user registered successfully'})
// }).catch((err)=>res.status(500).json({error:'failed to registerd'}))

// }).catch(err=>{console.log(err)});


// })
//using async await
router.post('/register',async(req,res)=>{
    let token;

    const {name,email,phone,work,password,cpassword}=req.body
    
    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
    return res.status(422).json({error:'plz fill all details!'})
    }
    try{
    
        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(433).json({error:"Email already exist"})
        }else if(password!=cpassword){
            return res.status(422).json({error: 'password are not matching'})
        }else{
    const user =new User({name,email,phone,work,password,cpassword});
    //decrypting or hash password
    await user.save();
    // console.log(`${user} user registered succesfully`)

        res.status(201).json({message:'user registered successfully'})
    }

    } catch(err){console.log(err)}

    })
// login route
router.post('/signin',async(req,res)=>{
try{
    const {email,password}=req.body;
    if(!email || !password){
       return  res.status(404).json({error:'plz fil appropriate details!'})
    }
    const userLogin = await User.findOne({email: email});
    // console.log(userLogin)
    if(userLogin){
const isMatch =await bcrypt.compare(password, userLogin.password)
 token =await  userLogin.generateAuthToken();
 console.log(token)
 res.cookie("jwtoken",token,{
    expires:new Date(Date.now()+25892000000),httpOnly:true
 })
if(!isMatch){
    res.status(400).json({error:" invalid credentials user error"})
}else{
res.json({message:"user signin successfully"})
}       
    }else{
    res.status(400).json({error:" invalid credentials "})
        
    }


}catch (err){
    console.log(err)
}
})
//about us page
router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
    })

    router.get('/getdata',authenticate, (req,res)=>{
        console.log('Hello');
        res.send(req.rootUser);
    })

//contact us page
router.post('/contact',authenticate,async (req,res)=>{
    try {
        const {name,email,phone,message}=req.body;
        if(!name||!email||!phone||!message){
            return res.json({error:'plzz fill contact form'})
        }
const userContact=await  User.findOne({_id: req.userID});
if(userContact){

    const userMessage = await userContact.addMessage(name,email,phone,message)
    await userContact.save();
    res.status(201).json({message:'user contact succesfully'})

}

    } catch (error) {
        console.log(error)
    }
})
router.get('/logout',authenticate,(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('user logout');
    
    })

module.exports=router