const express = require('express')

const getUser = (req,res)=>{
    res.json({"Message" : "get User"})
}


const postUser = (req,res)=>{
    res.json({"Message" : "post User"})
}


const putUser = (req,res)=>{
    res.json({"Message" : `update user ${req.params.id}`})
}


const deleteUser = (req,res)=>{
    res.json({"Message" : `delete user ${req.params.id}`})
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}