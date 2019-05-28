//解构赋值指定的变量名在对象中不存在，则被赋值为undefined
let person = {
    name: 'shiwei',
    age: 25,
}
let {name,age,sex} = person;
console.log(name,age,sex);   //sex输出undefined

//当指定的变量不存在时，可以指定一个默认值
let team = {
    teamname: 'Arsenal',
    location: 'North London',
}
let {teamname,location,country='England'} = team;
console.log(`${teamname}坐落于${location}是一支${country}球队`)