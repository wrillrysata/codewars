String.prototype.toJadenCase = function () {
var splittext = this.split(" "); /** split the text **/
var i;
for(i=0;i<splittext.length;i++) /** Loop through the text**/
{
splittext[i] = splittext[i][0].toUpperCase() + splittext[i].slice(1);/** convert the first letter to uppercase and add the remaining letters **/

}
  return splittext.join(" "); /** marry them together to form a whole **/
};






