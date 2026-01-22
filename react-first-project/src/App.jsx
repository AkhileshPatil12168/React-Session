import React from "react";
import Body from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  let data = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    hp: 35,
    attack: "Thunder Shock",
    rarity: "Common",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    hp: 39,
    attack: "Ember",
    rarity: "Common",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    hp: 44,
    attack: "Water Gun",
    rarity: "Common",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 4,
    name: "Bulbasaur",
    type: "Grass",
    hp: 45,
    attack: "Vine Whip",
    rarity: "Common",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Fairy",
    hp: 115,
    attack: "Sing",
    rarity: "Rare",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  },
];
  return (
    <>
      <Header />
      <Body data = {data}/>
      <Footer />
    </>
  );
}

export default App;
