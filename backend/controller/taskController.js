const express = require('express')

const getTask = (req,res)=>{
    res.json({"Message" : "get task"})
}


const postTask = (req,res)=>{
    res.json({"Message" : "post task"})
}


const putTask = (req,res)=>{
    res.json({"Message" : `update task ${req.params.id}`})
}


const deleteTask = (req,res)=>{
    res.json({"Message" : `delete task ${req.params.id}`})
}

module.exports = {
    getTask,
    postTask,
    putTask,
    deleteTask
}