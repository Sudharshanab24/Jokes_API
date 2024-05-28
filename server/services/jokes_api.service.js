import jokesapimodel from "../models/jokes_api.js";


export const createjokes =async (data)=>{
    const res=await jokesapimodel.create(data);
    console.log("data added models",res);
 }


 export const getjokes = async()=>
    {
        const jokes = await jokesapimodel.find({});
        return jokes;
    }


    export const updatejokes=async(id,data)=>
        {
            try{
                 return await jokesapimodel.findOneAndUpdate({_id:id},data,{new:true,})
            }
            catch(error)
            {
                throw error;
            }
    
        }

        export const deletejokes = async(id)=>
            {
                try {
                    return await jokesapimodel.deleteOne({_id:id});
                } catch (error) {
                    throw error;
                }
            }
