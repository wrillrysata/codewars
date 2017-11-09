function inArray(array1,array2){
  var result = [];
  var newResult = [];

  for(var i = 0; i < array2.length; i++) {
    for(var j = 0; j < array1.length; j++) {
      if(array2[i].includes(array1[j])) {
        result.push(array1[j])
      }
    }
  }
let newResult = Array.from(new Set(result)) /** remove duplicates using set **/

  return newResult.sort(); /**sort in alphabetical order **/
