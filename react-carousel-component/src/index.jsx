import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

const images = [
  { id: 1, name: "Bulbasaur", src: "../images/1.png" },
  { id: 2, name: "Charmander", src: "../images/2.png" },
  { id: 3, name: "Squirtle", src: "../images/3.png" },
  { id: 4, name: "Pikachu", src: "../images/4.png" },
  { id: 5, name: "Jigglypuff", src: "../images/5.png" },
];

const circles = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  }
];

ReactDOM.render(<Carousel images={images} circles={circles} />, document.querySelector("#root"));
