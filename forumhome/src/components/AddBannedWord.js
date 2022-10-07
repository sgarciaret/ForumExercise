import React, { useState } from "react";

const AddBannedWords = (props) => {

  const { handleAddWord } = props; 

  const [bannedWord, setBannedWord] = useState(""); 

  const handleSubmit = (e) => {

    e.preventDefault(); 
    
    handleAddWord({
      done: false,
      id: Math.random().toString(),
      bannedWord,
    });

    setBannedWord(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="addWords">
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={bannedWord}
            onChange={(e) => setBannedWord(e.target.value)}
            placeholder="Add a banned word to the list"
          />
          <button
            className="button pink"
            disabled={bannedWord ? "" : "disabled"}
          >
            Add word
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBannedWords;
