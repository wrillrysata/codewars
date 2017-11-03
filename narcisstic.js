function narcissistic( value ) {
var power= value.toString().length; /**Find the length of the value**/
var alldigits = []; /** array to hold the singular digits making up the number**/
var result = [];
power = parseInt(power); /** convert back to integer for further operations**/
digits = value.toString() /** convert value to back to string **/
for(let i=0;i<digits.length;i++) 
{
alldigits.push(parseInt(digits[i])) /** append each digit to array **/
}
for(let i=0;i<alldigits.length;i++)
{
result.push(Math.pow(alldigits[i],power));
}
var sum = result.reduce(add, 0); /**sum up the numbers in result **/
function add(a, b) {
    return a + b;
}
sum == value ? console.log(value + " is narcissitic ") : console.log(value + " is not narcissistic");
}
narcissistic(153)

