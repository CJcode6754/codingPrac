// function reverseString(str){
//     let reversed = '';

//     for(let i = str.length - 1; i>=0; i--){
//         reversed += str[i];
//     }

//     return reversed;
// }


//Split the string into an array of characters
//Reverse the order of the element in the array
// Join the  characrter back into a string
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));