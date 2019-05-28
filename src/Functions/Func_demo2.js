//默认参数值对arguments对象会产生影响
function A(first,second="b"){
    console.log(`argumengts的长度为${arguments.length}`);
    console.log(`first===arguments[0]的结果是${first===arguments[0]}`)
    console.log(`second===arguments[1]的结果是${second===arguments[1]}`)
    first = "c";
    second = "d";
    console.log(`first===arguments[0]的结果是${first===arguments[0]}`)
    console.log(`second===arguments[1]的结果是${second===arguments[1]}`)
}
A("a");

//second不会被算进arguments对象