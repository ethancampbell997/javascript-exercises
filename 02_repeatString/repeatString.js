const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }
    fin = "";
    for(let i = 0; i < num; i++){
        fin+=str;
    }
    return fin;
};

// Do not edit below this line
module.exports = repeatString;
