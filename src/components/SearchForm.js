import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

export default function SearchForm(props) {
  const characters = props.results;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const Done = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const SearchForm = styled.section` width: 90% `;
  const Search = styled.input`
    margin: 2vh auto;
    border: none;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    background-color: #eee;
  `;
  useEffect(() => {
    const results = !characters.name && characters.filter((character)=> character.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                                                        character.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                        character.gender.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [characters, searchTerm]);

  return (
    <SearchForm>
     <Search type="text" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value) }/>
      <Done>
        { searchResults[0] && searchResults.map((result, index) => <CharacterCard key={index} character={result}/>) }
      </Done>
    </SearchForm>
  );
}
