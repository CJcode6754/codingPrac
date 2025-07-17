function findLargestNumber(arr){
    let largetNum = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largetNum){
            largetNum = arr[i];
        }
    }

    return largetNum;
}

console.log(findLargestNumber([1,2,4,6,8]));
