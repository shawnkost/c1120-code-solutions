console.log("hello world");

var i = document.querySelector("h1");
console.log("$h1:", document.querySelector("h1"));
console.dir(i);

var exp = document.querySelector("#explanation");
console.log("$#explanation:", document.querySelector("#explanation"));
console.dir(exp);


var hi = document.querySelector(".hint");
console.log("$.hint:", document.querySelector(".hint"));
console.dir(hi);


console.log("$p:", document.querySelectorAll("p"));

console.log("$.example-link:", document.querySelectorAll(".example-link"));
