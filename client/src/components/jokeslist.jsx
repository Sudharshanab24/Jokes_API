import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const JokesList = ({ name, Joke, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded flex items-center space-x-4">
      <img
        src="https://t4.ftcdn.net/jpg/03/04/99/89/360_F_304998952_u4RbglQksZHYE6vVexLhovTwC1NLFyt0.jpg"
        alt="smile"
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-lg">{Joke}</p>
        <div className="flex space-x-2 mt-2">
          <IconButton color="primary" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default JokesList;
