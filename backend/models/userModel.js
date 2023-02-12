const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({

     name : {
        type : String,
        required : [true ,'Name is required']
     },
     email  :{
        type : String,
        required :  [true ,'email is required'] ,
        unique : true
     },
     password : {
        type:String,
     }
     

})


module.exports = mongoose.model('Task',taskSchema)