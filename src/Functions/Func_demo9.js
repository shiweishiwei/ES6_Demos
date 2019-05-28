//仍然可以用typeof和instanceof的方法来辨别箭头函数

let campare = (a,b)=>(a-b);
console.log(typeof campare);
console.log(campare instanceof Function);


//也可以在箭头函数上调用call apply bind方法，但是箭头函数本身的this值不会受到这些的影响