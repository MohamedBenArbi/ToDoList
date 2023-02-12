const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({"Message" : "get goal"})
})


router.post('/',(req,res)=>{
    res.json({"Message" : "post goal"})
})


router.put('/:id',(req,res)=>{
    res.json({"Message" : `update goal ${req.params.id}`})
})


router.delete('/:id',(req,res)=>{
    res.json({"Message" : `delete goal ${req.params.id}`})
})


module.exports = router 