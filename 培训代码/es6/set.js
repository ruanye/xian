// set 和 map 的数据结构

// set 特点自动去重  set 是一个特殊的对象，很多时候会让我们某些操作更加便捷 

const mySet = new Set();
// 添加数据
mySet.add(1)
mySet.add(1)
mySet.add(2)
console.log(mySet);
let arr =  [1,2,3,3,5]

// 用 set 进行数组去重 
const arrSet = Array.from(new Set(arr));
const arrSet2 = [...new Set(arr)];
console.log(arrSet)
console.log(arrSet2)

// set 判断是否存在某个值 

console.log(mySet.has(1))

// set 删除某个值

mySet.delete(1)
mySet.delete(2)
console.log(mySet)

// Map 数据结构 
const myMap = new Map([
    ["1", "公园"],
    ["2", "健身房"],
    ["3", "户外"],
  ]);

// 添加键值对

myMap.set('a',1)
console.log(myMap)

console.log(myMap.get('1'))

myMap.delete('a')
console.log(myMap)
