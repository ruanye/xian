// 对象的解构赋值 1. 对象解构赋值是根据 key 值来一一对应的  2. 可以用 ：后加自己气的变量名称来解构赋值
let name  = '1'
let obj = {
    name: '张三',
    age: 18,
    sex: '男'
}

let { age, name:myName, sex } = obj;
console.log(myName, age, sex);


// 有很强转化性，右侧不是对象的会调用对象的方法把右侧转为对象 
let obj2 = 1;

let {__proto__} = obj2;
console.log(__proto__)

let arr = [1,2,3,4,5];
let {length} = arr;
console.log(length)

// null 和 undefined 不能解构赋值，不能被转化为对象

// let {a} = null;
// let {b} = undefined;

let res = {
    code:200,
    data:{
        books:[
            {
                name:'西游记',
                price:100
            },
            {
                name:'红楼梦',
                price:100
            }
        ]
    }
}

let {code,data:{books}} = res;
console.log(code,books)
