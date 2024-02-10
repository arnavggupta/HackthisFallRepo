import mongoose,{Schema} from "mongoose";

const solnSchema=Schema({
    question:{
        type:Schema.Types.ObjectId,
        ref:'Doubt'
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    content:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    },
    publishingDate:{
        type:Date,
    }

},{
    timestamps:true
})


export const Soln=mongoose.model('Soln',solnSchema);
