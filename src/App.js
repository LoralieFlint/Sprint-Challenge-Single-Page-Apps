import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import Navigation from "./components/navigation";
import CharacterList from "./components/CharacterList";
export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
