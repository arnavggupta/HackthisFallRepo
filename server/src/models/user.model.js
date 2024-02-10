import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userschema = new mongoose.Schema(
{
    username:{
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
    
    communities:[{type:mongoose.Types.ObjectId,ref:'Community'}],
});


userschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const a = this.password;
        this.password = await bcrypt.hash(a, 10);
        //    console.log(this.Password);
    }
    next();
})



export default mongoose.model("User",userschema);

