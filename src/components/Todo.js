// Todo.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

export const Todo = ({ id, task, onDelete, onEdit, currentTask }) => {
  // Pass currentTask prop
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEdit(id, editedTask);
    setEditMode(false);
  };

  return (
    <div className="Todo">
      {editMode ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <p>{task}</p>
      )}
      <div className="button">
        <button onClick={() => setEditMode(!editMode)} className="edit-btn">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={() => onDelete(id)} className="delete-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {currentTask && <p>{currentTask}</p>}
    </div>
  );
};
