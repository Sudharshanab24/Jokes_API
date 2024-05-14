import router from './router/index.js'


import express from "express"

const app = express()
const port=8000



app.use(express.json())
app.use(router)


  app.get('/',(req,res)=>{

    res.send("hello sudhu")
})



app.listen(port,()=>{
    console.log("Server is running");
})
