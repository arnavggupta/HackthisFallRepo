import mongoose,{Schema} from "mongoose";

const resourceSchema=Schema({
    name:{type:String},
    description:{type:String},  
    link:{
        type:String,
    },
    
},{
    timestamps:true
});

export const Resource = mongoose.model("Resource",resourceSchema);