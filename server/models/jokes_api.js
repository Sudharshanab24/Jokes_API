import mongoose from "mongoose";
import {Schema} from "mongoose";

const jokesapi =new Schema({
    "Your_name":{type : String,
        required:true,
        minLength:5,
        maxLength:25,

    },
    "Your_Joke":{type: String,
        required:true,
        minLength:5,
        maxLength:1000,
    },
})

const jokesapimodel = mongoose.model("API",jokesapi)

export const createjokes =async (data)=>{
   const res=await jokesapimodel.create(data);
   console.log("data added models",res);
}

export const getjokes = async()=>
    {
        const jokes = await jokesapimodel.find({});
        return jokes;
    }
