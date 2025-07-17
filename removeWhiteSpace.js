function removeWhiteSpace(str){
    let result = '';

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            result += str[i];
        }
    }

    // const result = str.replace(/\s/g, '');
    return result;
}

console.log(removeWhiteSpace('Hello     Space'))