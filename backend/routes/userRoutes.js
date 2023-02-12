const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({"Message" : "get"})
})


router.post('/',(req,res)=>{
    res.status(201).json({"Message" : "post user"})
})


router.put('/:id',(req,res)=>{
    res.json({"Message" : `update user ${req.params.id}`})
})


router.delete('/:id',(req,res)=>{
    res.json({"Message" : `delete user ${req.params.id}`})
})


module.exports = router 