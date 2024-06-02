import React, { useState, useEffect } from "react";

const EditJokeModal = ({ joke, onSave, onClose }) => {
    const [name, setName] = useState(joke.Your_name);
    const [Joke, setJoke] = useState(joke.Your_Joke);
  
    const handleSave = async () => {
      try {
        const updatedJoke = { ...joke, Your_name: name, Your_Joke: Joke };
        await onSave(updatedJoke);
        onClose();
      } catch (error) {
        console.error("Error saving joke:", error);
      }
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-lg font-semibold">Edit Joke</h2>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">The Joke</label>
            <input
              type="text"
              value={Joke}
              onChange={(e) => setJoke(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    );
  };
  

export default EditJokeModal;
