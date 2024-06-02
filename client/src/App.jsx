import React, { useEffect, useState } from "react";
import JokesList from "./components/jokeslist.jsx";
import EditJokeModal from "./components/EditJokeModel.jsx"; 

const App = () => {
  const [requestData, setRequestData] = useState([]);
  const [editJoke, setEditJoke] = useState(null);

  useEffect(() => {
    async function fetchRequest() {
      try {
        const requestAPIData = await fetch("http://localhost:8000/jokes");
        const data = await requestAPIData.json();
        setRequestData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchRequest();
  }, []);

  const handleEdit = (joke) => {
    setEditJoke(joke);
  };

  const handleUpdateJoke = async (updatedJoke) => {
    try {
      const response = await fetch(`http://localhost:8000/jokes/${updatedJoke._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJoke),
      });
  
      if (response.ok) {
        const updatedData = await response.json();
        setRequestData(requestData.map(joke => (joke._id === updatedData._id ? updatedData : joke)));
      } else {
        console.error("Failed to update joke");
      }
    } catch (error) {
      console.error("Error updating joke:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/jokes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRequestData(requestData.filter(joke => joke._id !== id));
      }
    } catch (error) {
      console.error("Error deleting joke:", error);
    }
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <div>
        <h4 className="font-semibold text-lg">The Most Funniest Joke Ever Heard</h4>
        <p className="text-lg text-grey-600 mt-1">The jokes said by people</p>
      </div>

      <section className="my-5 space-y-4">
        {requestData.length > 0 ? (
          requestData.map((list) => (
            <JokesList
              key={list._id}
              name={list.Your_name}
              Joke={list.Your_Joke}
              onEdit={() => handleEdit(list)}
              onDelete={() => handleDelete(list._id)}
            />
          ))
        ) : (
          <p>No jokes available.</p>
        )}
      </section>

      {editJoke && (
        <EditJokeModal
          joke={editJoke}
          onSave={handleUpdateJoke}
          onClose={() => setEditJoke(null)}
        />
      )}
    </div>
  );
};

export default App;
