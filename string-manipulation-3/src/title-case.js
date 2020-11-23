/* exported titleCase */
function titleCase(title) {
  //set the string to lowercase
  title.toLowerCase()

  //split title into array of words
  title = title.split(" ");

  //capitalize first letter of the first index no matter what
  title[0] = title[0].charAt(0).toUpperCase() + title[0].substring(1).toLowerCase();

  //loop over array
  for (var i = 0; i < title.length; i++) {

    //check if the word is more than 3
    if (title[i].length > 3) {
      title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1)
    }
    //making sure i > 0 then check if previous string has for or ends with : then capitalize current string
    if (i > 0 && (title[i - 1] === "for" || title[i - 1].charAt(title[i - 1].length - 1) === ":")) {
      title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1)
    }

    //case that the word is javascript
    if (title[i].includes("Javascript")) {
      title[i] = title[i].substring(0, 4) + title[i].charAt(4).toUpperCase() + title[i].substring(5)
    }

    //case that the word is api
    if (title[i] === "api") {
      title[i] = title[i].toUpperCase()
    }

    //check if the current string contains "-" and capitalize the next letter
    var indexCheck = title[i].indexOf("-")
    if (indexCheck !== -1) {
      title[i] = title[i].substring(0, indexCheck + 1) + title[i].charAt(indexCheck + 1).toUpperCase() + title[i].substring(indexCheck + 2)
    }

  }
  //change title from array back into string and return
  return title.join(" ");
}
