import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(
      results =>{ 
        setCharacters(results.data.results);
        console.log(characters);
      }
    ).catch();
  }, []);

  return (
    <section className="character-list">
      <SearchForm results={characters}/>
    </section>
  );
}
