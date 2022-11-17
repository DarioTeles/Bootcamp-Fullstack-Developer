type entrada = number | string;

function somar(input1: entrada, input2: entrada){
    if(typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString() + input2.toString();
    } else{
        return input1 + input2;
    }
}

console.log(somar(1,2));
console.log(somar("A", "B"));
console.log(somar("1", 2));