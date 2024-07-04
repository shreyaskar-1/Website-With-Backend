const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLenght:3,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
        }
    }
    },
    phone:{
        type:Number,
        required:true,
        minLenght:10,
    },
    message:{
        type:String,
        required:true,
        minLenght:3,
    }
});

// creation of collection
const User = mongoose.model("User",userSchema);
module.exports = User;