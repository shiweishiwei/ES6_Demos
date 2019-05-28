//赋值给非同名的变量
let star = {
    name: "Russell",
    team: "OKC"
}
let {name:starname,team:starteam} = star;
console.log(`${starname}来自于${starteam}队`) //格式： 左边是赋值变量，右边是待赋值的变量