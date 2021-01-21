import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

const images = [
  {
    name: "Bulbasaur",
    src: "../images/1.png"
  },
  {
    name: "Charmander",
    src: "../images/2.png"
  },
  {
    name: "Squirtle",
    src: "../images/3.png"
  },
  {
    name: "Pikachu",
    src: "../images/4.png"
  },
  {
    name: "Jigglypuff",
    src: "../images/5.png"
  },
];

ReactDOM.render(<Carousel images={images} />, document.querySelector("#root"));
