import mongoose from "mongoose";
import { Schema } from "mongoose";

const resultModel = new Schema({
    username:{
        type: String
    },
    result:{
        type: Array,
        default: []
    },
    attempted:{
        type : Number,
        default:0
    },
    marks:{
        type:Number,
        default:0
    },
    status:{
        type: String,
        default :"",
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


export default mongoose.model("Result",resultModel)