import { useEffect, useState } from "react";

function SearchBar({ topic, handleSubmit }) {
  const [inputValue, setInputValue] = useState(topic);

  useEffect(() => {
    setInputValue(topic);
  }, [topic]);

  return (
    <form onSubmit={(e) => handleSubmit(e, inputValue)}>
      <input
        className="search-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
