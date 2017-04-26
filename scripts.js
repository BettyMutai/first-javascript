var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var add = function(number1, number2) {
  return number1 + number2;
};
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};
alert(subtract(number1, number2));

var mul = function(number1, number2) {
  return number1 * number2;
};
alert(mul(number1, number2));

var div = function(number1, number2) {
  return number1 / number2;
};
alert(div(number1, number2));

var modulus = function(number1, number2) {
  return number1 % number2;
};
alert(modulus(number1, number2));
