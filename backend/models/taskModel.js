const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
     user : {
      type : mongoose.Types.ObjectId,
      required : true , 
      ref : 'User'
     },
     title : {
        type : String,
        required :  [true ,'Tile is required']
     }
     

     

})


module.exports = mongoose.model('Task',taskSchema)
