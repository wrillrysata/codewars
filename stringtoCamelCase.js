function toCamelCase(str){

 return str.replace(/[_-](.)/g, function(match, group1) {
        return group1.toUpperCase();
    });

}
