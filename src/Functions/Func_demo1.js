//函数默认参数值。只有url是必须要传入值的参数，如果timeout和callback没有传值则用其默认值
function makeRequest(url,timeout=2000,callback=function(){
    console.log("没有传入函数")
}){
    console.log(`${url}的时间延迟是${timeout}`)
    callback();
}
makeRequest("shiwei")
makeRequest("shiwei",50000);
makeRequest("shiwei",8989899,function(){
    console.log("这次传进了函数")
})

