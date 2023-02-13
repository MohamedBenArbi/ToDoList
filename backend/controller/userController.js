const express = require('express')
const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')



const register = asyncHandler(async (req,res)=>{
    
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please enter all infos")
    }

    const user = await userModel.findOne({email})

    if(user){
        res.status(400)
        throw new Error("email already used")
    }
        
        const newUser = await userModel.create({name,email,password})
         
        if(newUser){
            res.status(201).json(newUser)
        }

})


const login = asyncHandler (async (req,res)=>{
    res.json({"Message" : "login"})
})

const getme = asyncHandler (async (req,res)=>{
    res.json({"Message" : "login"})
})


module.exports = {
    register,
    login,
    getme
}