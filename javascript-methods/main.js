var num1 = 24;
var num2 = 31;
var num3 = 47;
var maximumValue = Math.max(num1, num2, num3);
console.log("value of maximumValue:", maximumValue);
var heroes = ["spiderman", "black panther", "batman", "wolverine"];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log("value of randomIndex:", randomIndex);
var randomHero = heroes[randomIndex];
console.log("value of randomHero:", randomHero);

var library = [
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl"
  },
  {
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
    author: "Eckhart Tolle"
  },
  {
    title: "The Millionaire Next Door: The Surprising Secrets of America's Wealthy",
    author: "Thomas J. Stanley"
  }
];
var lastBook = library.pop()
console.log("value of lastBook:", lastBook);
var firstBook = library.shift()
console.log("value of firstBook:", firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log("value of library:", library);

var fullName = "Shawn Kost";
var firstAndLastName = fullName.split(" ");
console.log("value of firstAndLastName:", firstAndLastName);
var firstName = firstAndLastName.shift();
var sayMyName = firstName.toUpperCase()
console.log("value of sayMyName:", sayMyName);
