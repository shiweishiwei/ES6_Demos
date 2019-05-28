//每一个函数都有一个合适的name属性作为用于协助调试的额外信息
function doSomething(){
    
}
console.log(doSomething.name)

var doEverything = function(){}
console.log(doEverything.name)      //匿名函数的函数名是赋值后的变量名

//通过bind创建的函数名称前面带有bound前缀
console.log(doSomething.bind({name:'shiwei'}).name);
//通过构造器构造的函数名称是anonymous
console.log((new Function()).name) 