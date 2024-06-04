const removeFromArray = function(arr, ...num) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        let equ = 0;
        for(const current of num){
            if(arr[i] === current){
                equ++;
            }
        }
        if(equ===0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
