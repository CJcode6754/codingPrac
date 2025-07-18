function printVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'i'];
    let vowel = '';


    for(char of str.toLowerCase()){
        if(vowels.includes(char)){
            vowel += char
        }
    }

    return vowel
}

console.log(printVowels('Hellao'));
