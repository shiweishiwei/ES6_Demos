//对象解构
let person = {
    name:'shiwei',
    age:25
}
let {name,age} = person;
console.log(`${name}今年${age}岁`);

/*let {team,level};*/  //错误，使用解构功能必须要初始化

//用解构的方法给变量赋值
let arsenal = {
    team:"arsenal",
    location:"North London"
}
let team = "Crystal Palace";
let location = "South London";
console.log(`${team}坐落于${location}`);
({team,location} = arsenal);  //一定要用小括号包起来
console.log(`${team}坐落于${location}`);