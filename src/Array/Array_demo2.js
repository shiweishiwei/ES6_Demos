//find和findIndex方法，都接受两个参数，第一个参数是回调函数，第二个参数是可选参数，用于指定回调函数中的this值
let numbers = [1,2,3,4,5,6];
console.log(numbers.find((n)=>(n>4)));
console.log(numbers.findIndex((n)=>(n>4)));

//fill方法用指定的值填充数组元素
//若只传入一个参数，则会用该参数填充所有数组值
let arr1 = [5,6,7,8];
arr1.fill(1);
console.log(arr1);
//若传入两个参数，则第二个参数代表开始填充的索引（包含）
let arr2 = [5,6,7,8];
arr2.fill(1000,2);
console.log(arr2);
//若传入三个参数，则第三个参数代表结束填充的索引（不包含）
let arr3 = [5,6,7,8];
arr3.fill(1000,1,3);
console.log(arr3);

//copywithin方法，传入两个参数，第一个是开始填充值时的索引位置，另一个是开始复制值得索引位置
let arr4 = [1,2,3,4,5,6];
arr4.copyWithin(4,2);
console.log(arr4);

