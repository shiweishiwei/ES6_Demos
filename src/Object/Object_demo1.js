//Object.is()方法，用来判断两个对象是否相等。大部分结果等同于===。但是在+0和-0的比较以及NaN的比较上有区别
console.log(+0===-0);
console.log(Object.is(+0,-0));
console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));

//Object.assign()方法。接受任意数量的源对象，并按照指定的顺序将属性复制到接收对象中，如果多个源对象具有同名属性，则排位靠后的源对象会覆盖排位靠前的
var receiver = {};
Object.assign(receiver,
    {
        name: 'shiwei1',
        age: 20
    },
    {
        name: 'shiwei2',
        age: 24
    },
    {
        name: 'shiwei3',
    }
)
console.log(receiver)

//重读的对象字面量，es6不会报错，会选取最后一个值
var person = {
    name:'shiwei1',
    name:'shiwei2',
    name:'shiwei3',
    age:18,
    age:25
}
console.log(person)

//自有属性的枚举顺序，即用getOwnPropertyNames()方法
//规则：1.所有数字键按照升序
//     2.所有字符串键按照它们被加入对象的顺序排序
//     3.所有Symbol键按照它们被加入对象的顺序排序

var obj = {
    a:1,
    0:1,
    c:1,
    2:1,
    b:1,
    1:1
}
obj.d = 1;
console.log(Object.getOwnPropertyNames(obj).join(""))

//但是这个规则对于for-in和Object.Keys方法没有影响