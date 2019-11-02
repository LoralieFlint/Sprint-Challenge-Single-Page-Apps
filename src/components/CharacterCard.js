import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <Image src={props.charImg} alt={props.name} />
      <h1>{props.name}</h1>
      <p>Species: {props.species}</p>
      <p>Location: {props.location}</p>
      <p>Origin: {props.origin}</p>
    </div>

  )
}
