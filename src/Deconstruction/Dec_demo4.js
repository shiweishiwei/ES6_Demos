//嵌套对象解构
let  arsenal = {
    location:'North London',
    center:'Kolney',
    color:'white&red',
    players:{
        captain:{
            ozil:{
                country:'Germany'
            }
        }
    }
}
let {players:{captain}} = arsenal;
console.log(captain);
//给不同名的赋值
let {players:{captain:newcaptian}} = arsenal;
console.log(newcaptian)