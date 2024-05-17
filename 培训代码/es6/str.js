//字符串方法  padStart   padEnd  补全 

// 场景 月份 1 要求补全成 01 
let str = '1'.padStart(2,0);
console.log(str)

let str2 = '1'.padEnd(2,0);
console.log(str2)

console.log(str2.includes('1'))
