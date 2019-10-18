import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/?page=2').then(
      results =>{ 
        setCharacters(results.data.results);
      }
    ).catch();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {
        characters[0] && characters.map((character,index) => <CharacterCard key={index} character={character}/>)
      }
    </section>
  );
}
