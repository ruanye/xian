// 数组的方法
// sort 数组排序 
let  arr = [1,2,3,4,5,6,7,8,9,10];

// arr.sort((a,b)=>b-a); 
console.log(arr)

// splice  删除和替换数组中的元素 

arr.splice(2,1,99)

console.log(arr)

// filter 过滤数组中的元素  也可以用来做删除，返回是一个新数组 

let arr2 = arr.filter(item=>item!==99);

console.log(arr2)

// map 映射 
let checks1 = [{name:1},{name:2},{name:3}]
// 每一项都添加一个属性 check  属性为 true 

let mapArr = checks1.map(item=>{
    item.check = true;
    return item
})

console.log(mapArr)
// 
// check 表示每一项是否选中 
let checks = [{name:1,check:true},{name:2,check:true},,{name:2,check:true}]

//看下是否全部选中 
// every  每一项都符合条件就返回 true 
 
let allCheck = checks.every(item=>item.check==true)
console.log(allCheck)

// some 有一项符合条件，就返回 true

let allCheck1 = !checks.some(item=>item.check==false)

console.log(allCheck1)

// join 数组转为字符串 

let strArr = [1,2,3]

console.log(strArr.join(''));

// reduce 

let goodArr =  [1,2,3]

let sum = goodArr.reduce((prev,next)=>prev+next)
console.log(sum)

let goodArr2 =  [{name:'苹果',price:10,count:2},{name:'香蕉',price:5,count:3},{name:'橙子',price:3,count:4}]

let totalPrice =  goodArr2.reduce((prev,next)=>{
    return prev+next.price*next.count
},0)

console.log(totalPrice)
 // push
 let parr =[1]
 parr.push(2)
 console.log(parr)

 // includes
 console.log(parr.includes(1))

// shift
console.log(parr.shift())
// unshift
console.log(parr.unshift(2))
console.log(parr)
//  find

let apple = goodArr2.find(item=>item.name=='苹果');
console.log(apple)