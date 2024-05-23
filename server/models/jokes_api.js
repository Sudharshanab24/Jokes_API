import mongoose from "mongoose";
import {Schema} from "mongoose";

const jokesapi =new Schema({
    "Your_name":{type : String},
    "Your_Joke":{type: String},
})

const jokesapimodel = mongoose.model("API",jokesapi)

export const createjokes =async (data)=>{
   const res=await jokesapimodel.create(data);
   console.log("data added models",res);
}
