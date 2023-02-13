function divideAndSort(num){
    let str = num.toString();
    // divide by 0
    let arr = str.split('0');
    // sort
    let sortArr = [];
    for(let i = 0; i < arr.length; i++){
        sortArr.push(arr[i].split('').sort().join(''));
    }
    let final = sortArr.join('');
    console.log(final);
}

// invoke
divideAndSort(5956560159466056);