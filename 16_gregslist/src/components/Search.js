import React, { useState } from "react";

function Search({ setSearch }) {
  const [partialSearch, setPartialSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(partialSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={partialSearch}
        onChange={(e) => setPartialSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
