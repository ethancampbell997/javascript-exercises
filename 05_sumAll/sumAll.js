const sumAll = function(small, large) {
    if(small < 0 || large < 0 || typeof small != "number" || typeof large != "number"){
        return "ERROR";
    }
    let num = 0;
    if(small > large){
        let temp = small;
        small=large;
        large=temp;
    }
    for(let i = small; i <= large; i++){
        num+=i;
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
