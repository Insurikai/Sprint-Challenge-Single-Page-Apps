import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const characters = props.results;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = !characters.name && characters.filter((character)=> character.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                                                        character.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                        character.gender.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [characters, searchTerm]);

  return (
    <section className="search-form">
     <input type="text" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value) }/>
    { searchResults[0] && searchResults.map((result, index) => <CharacterCard key={index} character={result}/>) }
    </section>
  );
}
