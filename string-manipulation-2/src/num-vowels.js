/* exported numVowels */
function numVowels(string){
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for (var x = 0; x < string.length; x++) {
      if (vowel_list.indexOf(string[x]) !== -1) {
        vcount += 1;
      }
    }
    return vcount;
  }
