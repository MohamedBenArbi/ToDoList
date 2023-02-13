const mongoose = require('mongoose')

const userShema = mongoose.Schema({

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


module.exports = mongoose.model('User',userShema)