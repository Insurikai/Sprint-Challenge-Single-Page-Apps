import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import Characters from "./components/Characters.js";
import { Route } from 'react-router-dom';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path='/characters' component={Characters}/>
    </main>
  );
}
