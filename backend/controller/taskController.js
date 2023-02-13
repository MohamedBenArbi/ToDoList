const express = require('express')
const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')
const userModel = require('../models/userModel')


const getTask = asyncHandler(async (req,res)=>{
    const goals = await Task.find({user:req.user.id}) 
    res.json(goals)
})


const addTask =  asyncHandler(async(req,res)=>{

   const {title,description,priority} = req.body


    if(!title ){
           res.status(400)
           throw new Error('Please enter a title')
    }
       const task =  await Task.create({user : req.user.id,title,description,priority})

       if(task){
        res.json(task)

       }else{
        res.status(400)
        throw new Error('Task wasnt created ')
       }
    
})


const putTask = asyncHandler(async (req,res)=>{
    const goal = await Task.findById(req.params.id)

    const {title,description,priority} = req.body

    if(!goal){
        res.status(400)
        throw new Error('Task Doesnt Exist')
    }

    const user = await userModel.findById(req.user.id)
  
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    if(user.id !== goal.user.toString()){
        res.status(401)
        throw new Error("Not Authorised")
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id,{title,description,priority},{new : true})

    res.status(201).json(updatedTask)
})


const deleteTask = asyncHandler(async (req,res)=>{
         const id = req.params.id 
         const goal = await Task.findById(id)

         if(!goal){
            res.status(400)
            throw new Error('Task Doesnt Exist ')
         }

         const user = await userModel.findById(req.user.id)
  
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    if(user.id !== goal.user.toString()){
        res.status(401)
        throw new Error("Not Authorised")
    }

        await Task.findByIdAndDelete(id)
         res.json({"Message" : `Deleted Task with id : ${id}`})
}
)
module.exports = {
    getTask,
    addTask,
    putTask,
    deleteTask
}