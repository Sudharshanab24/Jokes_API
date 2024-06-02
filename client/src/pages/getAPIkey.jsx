// src/pages/GetApiKey.jsx
import React, { useState } from 'react';
import axios from './axiosConfig.js'; // Adjust the path as needed

const GetApiKey = () => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const generateApiKey = async () => {
    try {
      const response = await axios.post('/generate-api-key');
      setApiKey(response.data.apiKey);
      setError('');
    } catch (err) {
      setError('Error generating API key');
      console.error('Error generating API key', err);
    }
  };

  return (
    <div>
      <button onClick={generateApiKey} className="py-2 px-4 bg-blue-600 text-white rounded">
        Generate API Key
      </button>
      {apiKey && <p>Your API Key: {apiKey}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default GetApiKey;
