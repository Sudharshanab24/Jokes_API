import express from "express"

const router=express.Router()

router.post('/create',(req,res)=>{
    const dataFromClient=(req.body)
    res.send(dataFromClient)
})


export default router;