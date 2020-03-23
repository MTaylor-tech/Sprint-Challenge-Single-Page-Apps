import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters/" exact component={CharacterList} />
      <Route path="/locations/" exact component={LocationsList} />
    </main>
  );
}
