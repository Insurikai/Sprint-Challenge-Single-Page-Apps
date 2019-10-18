import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.character.name}</h1>
      <div>
        <p>{props.character.species}</p> <p>{props.character.gender}</p>
      </div>
    </div>
  );
}
