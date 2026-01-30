import { model, Schema } from "mongoose";

const noteSchema = new Schema({
    title:{
        type:String,
        required:true,
        validate:{
            validator:function(title){
                if(title == title.toUpperCase()){
                    return false
                }
                return true
            },
            message:()=>{
                return "title cannot be uppercase"
            }
        }
    },
    content:{
        type :String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
},{
    timestamps:true
})


export const noteModel = model("note" , noteSchema)