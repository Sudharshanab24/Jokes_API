import React, { useEffect, useState } from "react";
import JokesList from "./components/jokeslist";

const App=()=>{
  const [requestData,setRequestData]=useState([]);

  useEffect(()=>
  {
      async function fetchRequest(){
        const requestAPIData = await  fetch("http://localhost:8000/jokes");
        const data = await requestAPIData.json();
        setRequestData(data);


  
      }
      fetchRequest();
  },[]);




  return (<div className="bg-white p-5 rounded shadow">
    <div>
    <h4 className="font-semibold text-xl">The Most funniest joke ever heard</h4>
    <p className="text-sm text-grey-600 mt-1">The jokes said by peoples</p>
    </div>

    <section className="my-5 space-y-4"> 
    {
      requestData.map(list => <JokesList key={list} Your name={list.Your_name} The Joke={list.Your_Joke}/>)
    }
    

    
    
    </section>
    </div>);
};

export default App;