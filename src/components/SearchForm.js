import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     // Add a search form here
     <form>
        <input
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
