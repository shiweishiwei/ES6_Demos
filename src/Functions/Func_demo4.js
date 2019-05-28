//es5实现pick函数，即获取目标对象中的相关属性
function pick(obj){
    let result = Object.create(null);
    for(let i=0;i<arguments.length;i++){
        result[arguments[i]] = obj[arguments[i]]
    }
    return result;
}
console.log(pick({name:'shiwei',age:25,sex:'male'},'age','sex'))

//用不定参数改写pick函数
function newpick(obj,...keys){
    let result = Object.create(null);
    for(let i=0;i<keys.length;i++){
        result[keys[i]] = obj[keys[i]];
    }
    console.log(result)
}
newpick({teamname:'arsenal',country:'England',league:'premier'},'teamname','league')



//不定参数的使用有限制，首先，每个函数最多只能声明一个不定参数，并且一定要放到所有参数的末尾；
//第二，不能在setter中使用不定参数，因为setter的参数有且只能有一个
//不定参数的传入对argumengts对象没有影响
