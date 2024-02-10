import mongoose from "mongoose";

import bcrypt from "bcrypt"
const userschema = new mongoose .Schema(
{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    }
});


userschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const a = this.password;
        const b = this.confirm_password;
        this.password = await bcrypt.hash(a, 10);
        //    console.log(this.Password);
        this.confirm_password = await bcrypt.hash(b, 10);
    }
    next();
})



export default mongoose.model("user",userschema);

