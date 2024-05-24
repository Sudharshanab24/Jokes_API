import express from "express"
import { createjokes } from "../models/jokes_api.js";

const router=express.Router()

router.post('/create',async(req,res)=>{
    const dataFromClient=req.body;
    try{
    const createdres=await createjokes(dataFromClient);
    console.log("connection in index file",createdres);
    return res.json(dataFromClient)}
    catch(error)
    {
        if(error.name==="ValidationError")
        {
            console.log(error.errors);
            const message=Object.values(error.errors).map((value)=>value.message);
                return res.status(400).json({
                    error:message,
                });
            

        }
        res.status(400).json(error.message);
    }
})


export default router;