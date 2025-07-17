function factorial(num){
    // handle edge case bacause 0 is always factorial to 1
    if(num === 0){
        return 1;
    }

    // initialize the factorial variable
    let factorial = 1;

    // multiply numbers from 1 to num to calculate the factorial
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(5));
