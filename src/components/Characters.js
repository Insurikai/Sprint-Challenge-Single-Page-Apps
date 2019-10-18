import React from "react";
import CharacterList from "./CharacterList";

export default function WelcomePage() {
  return (
    <section className="character-page">
        <h1>Characters: </h1>
        <CharacterList />
    </section>
  );
}
