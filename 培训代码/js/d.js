// 字符串常用方法

// split    字符串转数组
let str = '123'
str = str.split('')
console.log(str)

let str2 = '1-2-3'
str2= str2.split('-')
console.log(str2)

// slice  截取字符串

console.log(str.slice(0,1))

// includes 判断会否包含某个字符（也可以用 indexOf）

console.log(str.includes('1'))


// m -n 中间的随机数,只需要背公式就可以了 
  
// Math.floor(Math.random() * (m - n + 1)) + n;
// Math.floor(Math.random() * 10) + 1; // 生成 1 到 10 之间的随机整数

