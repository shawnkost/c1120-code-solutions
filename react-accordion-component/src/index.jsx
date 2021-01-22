import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./accordion";

const listOfTopics = [
  {
    id: 1,
    name: "Hypertext Markup Language",
    details:
      "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  },
  {
    id: 2,
    name: "Cascading Style Sheets",
    details:
      "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
  },
  {
    id: 3,
    name: "JavaScript",
    details:
      "JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
  }
];

ReactDOM.render(
  <Accordion topics={listOfTopics}/>,
  document.querySelector("#root")
);
