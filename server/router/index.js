import express from "express"
import { createjokes } from "../models/jokes_api.js";

const router=express.Router()

router.post('/create',async(req,res)=>{
    const dataFromClient=req.body;

    const createdres=await createjokes(dataFromClient);

    console.log("connection in index file",createdres);
    return res.json(dataFromClient)
})


export default router;