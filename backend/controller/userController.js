const express = require('express')
const asyncHandler = require('express-async-handler')



const getUser = asyncHandler(async (req,res)=>{
    res.json({"Message" : "get User"})
})


const postUser = asyncHandler (async (req,res)=>{
    res.json({"Message" : "post User"})
   

})


const putUser = asyncHandler (async (req,res)=>{
    res.json({"Message" : `update user ${req.params.id}`})
})


const deleteUser = asyncHandler(async (req,res)=>{
    res.json({"Message" : `delete user ${req.params.id}`})
})

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}