// 一 变量定义
//共同特点  1. 没有变量提升 2. 不可以重复声明 3.块级作用域
let b = 2;

// 1. const 定义必须赋值  2.const 变量一旦声明，值不能改变
const pi = 3.14;

// let list = document.querySelectorAll('li');

// for (let index = 0; index < list.length; index++) {
//    list[i].onclick = function(){
//      console.log(i) // 0,1,3
//    }   
// }

//  二. 数组和对象解构赋值
//  1. 数组的解构赋值  1. 左右结构一致，按照顺序进行解构赋值  2.省略结果赋值的时候用 , 逗号占位  3.报错的情况，当右侧不是数组或者类数组的时候会报错
// 案例 1 
let arr =  [1,2,3]

let [e,,g] = arr
console.log(e,g)











