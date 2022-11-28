const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },  
    mobile :{
        type: Number,
        unique :true,
        required:true
    },
    email : {
        type: String,
        unique : true,
        required : true
    },
    dob: {
        type: Date,
        trim: true,
    },
    gender :{
        type: String,
        required : true
    },
    addressline1 :{
        type: String,
        required : true
    },
   
    addressline2 :{
        type: String,
        required : true
    },
    batch: {
        type: String,
        required : true

    },
    courseType: {
        type: String,
        required : true

    },
    courseName: {
        type: String,
        required : true

    }
    // testImage:{
    //     data:Buffer,
    //     contentTYpe: String
    // }
})

module.exports = User = mongoose.model('student', userSchema)