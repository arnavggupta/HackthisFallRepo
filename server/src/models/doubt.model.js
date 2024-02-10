import mongoose,{Schema} from "mongoose";

const doubtSchema=Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    solutions:[
        {
            type:Schema.Types.ObjectId,
            ref:"Soln"
        }
    ],
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:['pending','completed'],
        default:'pending'
    },
    publishingDate:{
        type:Date,
    }
    
},{
    timestamps:true
})

export const Doubt=mongoose.model('Doubt',doubtSchema);