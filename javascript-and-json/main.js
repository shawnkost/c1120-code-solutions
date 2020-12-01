var arr = [
  {
    isbn: "9781974700523",
    title: "Kimetsu no Yaiba, Vol. 1",
    author: "Koyoharu Gotouge"
  },
  {
    isbn: "9781577314806",
    title: "The Power of Now: A Guide to Spiritual Enlightenment",
    author: "Eckhart Tolle"
  },
  {
    isbn: "9780807014295",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl"
  }
]

console.log("array of books:", arr);
console.log("typeof arr:", typeof arr);

var stringify = JSON.stringify(arr)

console.log("JSON string of arr:", stringify);
console.log("typeof JSON stringify:", typeof stringify);

var newString = JSON.stringify({"id": 24, "name": "shawn kost"})

console.log("newString value:", newString);
console.log("typeof newString:", typeof newString);

var newObject = JSON.parse(newString);

console.log("value of newObject:", newObject);
console.log("typeof newObject:", typeof newObject);
