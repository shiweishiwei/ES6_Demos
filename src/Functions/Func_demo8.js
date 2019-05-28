//箭头函数与传荣函数的不同
//1. 箭头函数没有this，super，arguments，new.target的绑定。箭头函数中的这些值都由外围最近一层非箭头函数决定
//2. 箭头函数不能通过new 关键字调用
//3. 箭头函数没有原型
//4. 箭头函数不能改变this指向，即this指向始终固定

let sum = (num1,num2)=> (num1+num2)
//等价于
let sum1 = (num1,num2) => {return num1+num2}
console.log(sum(10,100))
console.log(sum1(10,100))

//创建立即执行函数
let person = ((name)=>{
    return { x:function(){
        console.log(name);
    }}
})('shiwei')

console.log(person.x())

//箭头函数没有this绑定，箭头函数非常适用于数组处理