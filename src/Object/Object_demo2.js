//改变对象原型
let person = {
    getGreeting(){
        return "Hello"
    }
}
let dog = {
    getGreeting(){
        return "woof"
    }
}

let a = Object.create(person);        //以person为原型创建了对象a
console.log(a.getGreeting());
console.log(Object.getPrototypeOf(a)===person);

//将a对象的原型重新设置成dog
Object.setPrototypeOf(a,dog);
console.log(Object.getPrototypeOf(a)===dog);