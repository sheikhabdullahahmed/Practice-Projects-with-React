import React, { useState } from 'react';

function Hero({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Hero;
