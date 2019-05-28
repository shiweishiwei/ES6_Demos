//数组解构
let colors = ['green','red','blue'];

let [first,second] = colors;
let [,,third] = colors;

console.log(first,second,third);

//解构赋值
let teams = ['arsenal','OKC','Dotmond'];
firstteam = 'livelpool';
secondteam = 'chelsea';
[firstteam,secondteam] = teams;
console.log(firstteam,secondteam);

//通过解构赋值来交换两个变量的值。以前的方法需要借助于中间变量
let a = 1;
let b = 10;
console.log(a,b);
[a,b] = [b,a];
console.log(a,b);

//可以指定数组某位置的变量是默认值,当指定位置的属性不存在或者是undefined时使用默认值
let stars = ['ozil'];
let [firsstar,secondstar='auba'] = stars;
console.log(firsstar,secondstar)

//嵌套解构
let dota2 = ['china',['cis','eu'],'america'];
let [firstloc,[secondloc],thirdloc] = dota2;
console.log(secondloc)

//不定元素，类似以不定参数，将数组中的其余参数赋值给一个特定的变量
let numarr = [1,2,3,4,5,6];
let [firsrnumber,...restnumbers] = numarr;
console.log(firsrnumber);
console.log(restnumbers);
//可以用于深复制一个数组
let newnumarr = [...numarr];
console.log(newnumarr);