function isPalindrome(str){
    // reverse string
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

console.log(isPalindrome('racecar'))