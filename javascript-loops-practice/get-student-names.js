/* exported getStudentNames */
function getStudentNames(students) {
  var arr = [];
  for (var name in students) {
    arr.push(students[name]["name"]);
  }
  return arr;
}
