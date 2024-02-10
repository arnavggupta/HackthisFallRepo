import mongoose,{Schema} from "mongoose";

const communitySchema=Schema({
    name: { type: String, required: true },
    description:{type :String},
    creator :{ type: Schema.Types.ObjectId, ref: 'User' },
    members : [{ type: Schema.Types.ObjectId, ref: 'User'}],
    doubts:[{type :Schema.Types.ObjectId,ref: 'Doubt'}],
    chats:[{type :Schema.Types.ObjectId,ref :'Chat'}],
    resources:[{type :Schema.Types.ObjectId,ref:'Resource'}]
    
},{
    timestamps:true
})

export const Community = mongoose.model('Community',communitySchema); 