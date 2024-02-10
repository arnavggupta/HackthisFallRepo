import mongoose,{Schema} from "mongoose";

const chatSchema=Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    content:{
        type:String,
        required:true
    },

},{
    timestamps:true
})

export const Chat=mongoose.model('Chat',chatSchema);