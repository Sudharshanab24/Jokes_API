import React from "react";

const jokeslist = ({name,Joke})=>
    {
        return (
            <div className="border p-4 rouded flex items-center space-x-4">
         <img src="https://t4.ftcdn.net/jpg/03/04/99/89/360_F_304998952_u4RbglQksZHYE6vVexLhovTwC1NLFyt0.jpg" alt="smile"className="w-20 h-20 rounded-full"/>
         <div className="">
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="text-gray-600 text-sm">{Joke}</p>
         </div>
    </div>
         );
    }

    export default jokeslist;