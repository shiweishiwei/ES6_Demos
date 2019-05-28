//不定参数用于展开运算符

let values = [25,50,75,100];
console.log(Math.max(...values));
console.log(Math.max.apply(Math,values));
//因为max函数只接受两个参数，所以需要做这些修改
console.log(Math.max(...values,1000))