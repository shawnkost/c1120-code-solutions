import React from "react";
import ReactDOM from "react-dom";

const pokedex = [
  { number: "001", name: "Bulbasaur" },
  { number: "004", name: "Charmander" },
  { number: "007", name: "Squirtle" },
  { number: "025", name: "Pikachu" },
  { number: "039", name: "Jigglypuff" },
];

function ListItem(props) {
  return <li>{props.value}</li>
}

function LoopList(props) {
  const pokemon = props.pokemon
  const listItems = pokedex.map((pokemon) => {
    return <ListItem key={pokemon.number} value={pokemon.name} />;
  });
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(<LoopList />, document.querySelector("#root"));
