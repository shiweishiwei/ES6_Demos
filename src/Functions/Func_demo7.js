//元属性 new target来判断函数是否通过new关键字调用
function Person(name){
    //如果通过new Person() 方式调用，则元属性值为new操作符的目标
    console.log(new.target)
    //如果使用Person()的方式调用，则元属性的值为undefined
}

var p1 = Person('shiwei');
var p2 = new Person('shiwei2');

function Animal(name){
    if(new.target!==undefined){
        this.name = name;
    }
    else {
        throw new Error("必须通过new关键字来调用Animal")
    }
}

function Cat(name){
    Animal.call(this,name)
}

var animal = new Animal('狗');   
var cat = new Cat('猫');             //抛出错误，因为调用的是Animal.call()而不是调用的new Animal(),因此new.target那一关过不了        
