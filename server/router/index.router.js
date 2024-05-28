import express from "express"
import { createjokes, deletejokes, getjokes, updatejokes } from "../services/jokes_api.service.js";

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


router.get('/jokes',async(req,res)=>
{
    const result=await getjokes()

    console.log(result);

    return res.json(result);
})

router.put('/jokes/:id',async(req,res)=>
{
    const docid=req.params.id;

    if(docid)
        {
        const result=await updatejokes(docid,req.body)
        return res.json(result);
        }
    else
    return res.status(403);
})

router.delete('/jokes/:id',async(req,res)=>
{
    const docid=req.params.id;
    if(docid)
        {
            const result=await deletejokes(docid);
            return res.json(result)
        }
    return res.status(403);
})

export default router;