//默认参数表达式
let value = 5;

function getValue(){
    return value++;
}

function add(first,second=getValue()){
    return first + second;
}

console.log(add(1,1));   //2,传进了第二个参数，和默认参数无关
console.log(add(1));     //6
console.log(add(1))      //7,value参数已经加1了