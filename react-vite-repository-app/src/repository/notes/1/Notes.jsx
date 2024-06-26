import React from "react";

const Notes = ({ text, onDelete }) => {
  
  return (
    <>
    <div className="note">
      <p>{text}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
    </>
  )
};
export default Notes;
