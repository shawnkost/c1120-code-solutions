/* exported oddOrEven */
function oddOrEven(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push("even");
    } else {
      arr.push("odd");
    }
  }
  return arr;
}
