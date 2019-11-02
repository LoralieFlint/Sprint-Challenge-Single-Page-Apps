import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState({ name: "" });

  const handleChange = user => {
    console.log("changed", user.target.name, user.target.value);
    setSearch({ ...search, [user.target.name]: user.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(search);
  };
  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <input
          placeholder="name"
          value={search.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
