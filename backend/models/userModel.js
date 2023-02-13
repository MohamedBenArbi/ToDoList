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
        required : [true,'password is required']
     }
     

})


module.exports = mongoose.model('Task',taskSchema)