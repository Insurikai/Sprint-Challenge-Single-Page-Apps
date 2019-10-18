import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";
import styled from 'styled-components';

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const CharacterList = styled.section`
    width: 60%;
    margin:5vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
    border-radius: 20px;
  `;

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
