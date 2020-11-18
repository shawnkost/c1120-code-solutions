/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var intials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return intials;
}
