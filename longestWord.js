function findTheLongestWord(sentence){
    // SPlit the sentence into an array of words
    const words = sentence.split(' ');
    let longestWord = '';

    // Iterate to each words 
    for(let word of words){
        // check if the current word is longer than the current longest word
        if(word.length > longestWord.length){
            // if true update the longestWord variable
            longestWord = word
        }
    }

    return longestWord;
}

console.log(findTheLongestWord('Hi, My name is Ceejay'));