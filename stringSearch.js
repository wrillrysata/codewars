//An ES6 function that checks for the occurence of a word in a given set of strings, 


const Search = (substr) => {
const words = ['International', 'Concentration', 'Reduce']
let count = 0;
const matches = [];
for(let i =0; i<words.length;i++){
  if (words[i].indexOf(substr) !== -1) {
    
    matches.push(words[i])
    count+=1;

  }
 
}

  count >= 1 ? console.log(matches): console.log('No match found')

}
Search('nation');
//['International']

