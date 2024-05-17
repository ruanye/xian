// 案例 2 不定参解构赋值 

let arr2 = [1,2,3,4,5]

let [a,...arg] = arr2 ;

console.log(a)
console.log(arg)

// 解构赋值的时候如果给了默认值，只有在值绝对等于  === undefined 的时候才会使用默认值
let arr3 = [1,undefined]
let [y,z=2] =arr3;

console.log(y,z)

// 扩展运算符的作用  可以实现数组合并，可以实现数组的新增 

let arr4 = [...arr2,...arr3]
console.log(arr4)


function add (a,...args){
   console.log(a)
   console.log(args)
}

add(100,2,3,4)
add(100,2,4)