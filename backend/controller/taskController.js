const express = require('express')
const asyncHandler = require('express-async-handler')



const getTask = asyncHandler(async (req,res)=>{
    res.json({"Message" : "get task"})
})


const postTask =  asyncHandler(async(req,res)=>{
    if(!req.body.title){
           res.status(400)
           throw new Error('Please enter a title')
    }else{
        res.json({"Message" : "post task"})
    }
})


const putTask = asyncHandler(async (req,res)=>{
    res.json({"Message" : `update task ${req.params.id}`})
})


const deleteTask = asyncHandler(async (req,res)=>{
    res.json({"Message" : `delete task ${req.params.id}`})
}
)
module.exports = {
    getTask,
    postTask,
    putTask,
    deleteTask
}