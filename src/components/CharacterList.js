import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const Char = styled.div `
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 10px;
`;
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      const char = res.data.results;

      setCharacter(char);
    });
  }, []);

  return (
    <Char className="character-list">
      <Char className="character-list">
        {Array.from(character).map(char => {
          return (
            <CharacterCard
              key={char.id}
              charImg={char.image}
              name={char.name}
              species={char.species}
              location={char.location.name}
              origin={char.origin.name}
            />
          );
        })}
      </Char>
    </Char>
  );
}
