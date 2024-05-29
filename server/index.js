import router from './router/index.router.js'
import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const port=8000

app.use(cors());
app.use(express.json())
app.use(router)

router.get("*",(req,res)=>{
  return res.status(404);
})


app.get('/',(req,res)=>{
  res.json({
    name:"sudhu",
    age:20
  })
})



app.listen(port,()=>{
    console.log("Server is running");
})

if(process.env.mongodb_url)
  {
    try {
      mongoose.connect(process.env.mongodb_url)
      console.log("connected");
    } catch (error) {
      console.log("not connected",error);
    }

  }
  else{
    console.log("url not found");
  }