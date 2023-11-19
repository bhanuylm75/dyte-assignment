import mongoose from "mongoose";

const emp= new mongoose.Schema({
  name:{
    type:String,
    required:[true,"imp"],
    unique:true

  }
})

export default mongoose.model("em",emp)



