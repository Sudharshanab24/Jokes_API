import React from "react";
import JokesList from "./components/jokeslist";

const data=
  [
    {
        "_id": "664f81de0e7361df668cb0c3",
        "Your_name": "geetha",
        "Your_Joke": "Did you hear about the first restaurant to open on the moon?It had great food, but no atmosphere.",
        "__v": 0
    },
    {
        "_id": "6650d33b49f735a52d3b08fd",
        "Your_name": "sanjana",
        "Your_Joke": "What kind of shorts do clouds wear?Thunderpants",
        "__v": 0
    },
    {
        "_id": "6650d38349f735a52d3b08ff",
        "Your_name": "thrisha",
        "Your_Joke": "How do you measure a snake?In inches—they don’t have feet.",
        "__v": 0
    },
    {
        "_id": "6650d3aa49f735a52d3b0901",
        "Your_name": "shalini",
        "Your_Joke": "Why did the bicycle fall over?Because it was two-tired!",
        "__v": 0
    },
    {
        "_id": "6650d866af12856707a10118",
        "Your_name": "geetha",
        "Your_Joke": "Why are crabs so bad at sharing?Because they’re all shellfish.",
        "__v": 0
    },
    {
        "_id": "6655f4131125d67235a65ca1",
        "Your_name": "sandhya",
        "Your_Joke": "What do you call malware on a Kindle?A bookworm.",
        "__v": 0
    }
]


const App=()=>{
  return (<div className="bg-white p-5 rounded shadow">
    <div>
    <h4 className="font-semibold text-xl">The Most funniest joke ever heard</h4>
    <p className="text-sm text-grey-600 mt-1">The jokes said by peoples</p>
    </div>

    <section className="my-5 space-y-4"> 
    {
      data.map(list => <JokesList key={list} Your name={list.Your_name} The Joke={list.Your_Joke}/>)
    }
    

    
    
    </section>
    </div>);
};

export default App;