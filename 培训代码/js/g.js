// 对象的基础操作
let  obj = {
    name: 'zhangsan',
    age: 18,
    sex: '男',
}

// for in  怎么遍历对象

for(let key in obj){
    console.log(key,obj[key])
}

// keys  获取对象所有的可以 变成一个数组 
console.log(Object.keys(obj))
// values  获取对象所有的值
console.log(Object.values(obj))

console.log(Object.entries(obj))