const express = require('express')
const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const register = asyncHandler(async (req,res)=>{
    let token 
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please enter all infos")
    }

    const userExist = await userModel.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("email already used")
    }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({name,email,password:hashedPassword})

        token = jwt.sign({id},process.env.JWT_SECRET)
         
        if(user){
            res.status(201).json({
                _id : user.id , 
                name : user.name , 
                email : user.email,
                token:generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('User wasnt created ')
        }

})


const login = asyncHandler (async (req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please fill all fileds')
    }

    const user = await userModel.findOne({email}) 

    if(user && await bcrypt.compare(password,user.password)){
     
        res.status(200).json({
            _id : user.id , 
            name : user.name , 
            email : user.email,
            token:generateToken(user._id)
        })

    }else{
        throw new Error('Invalid email or wrong password')
    }



})

const getme = asyncHandler (async (req,res)=>{
    res.json({"Message" : "login"})
})

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


module.exports = {
    register,
    login,
    getme
}