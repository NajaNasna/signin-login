const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    Dob :{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true,
        enum :['Male','Female']
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    AltPhone:{
        type:String,
    },
    Courses:{
        type:String,
        required:true,
        enum: ['aaa', 'bbb', 'ccc']
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Students',UserSchema)