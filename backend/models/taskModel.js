const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({

     title : {
        type : String,
        required :  [true ,'Tile is required']
     },
     description  :{
        type : String,

     },
     priority : {
        type:Number,
     }
     

     

})


module.exports = mongoose.model('Task',taskSchema)