//创建数组
//Array.of()方法，只需要在参数中传入希望在数组中包含的值
var arr1 = Array.of('a',1,true);
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

//Array.from()方法，接收可迭代对象或类数组对象作为第一个参数最终返回一个数组
function A(){
    return Array.from(arguments)
}
console.log(A(1,2,3,4,5));

//如果想进一步转换数组，可以提供一个映射函数作为第二个参数，将类数组对象的每一个值转换成其他对象
function square(){
    console.log(Array.from(arguments,(val)=>(val*val)))
}
square(1,2,3)