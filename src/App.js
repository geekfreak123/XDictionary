import React, { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseTerm,
    );
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
        <p>
          <strong>Definition:</strong>
        </p>
      </div>
      {definition !== "" && <p> {definition}</p>}
    </div>
  );
};

export default XDictionary;
