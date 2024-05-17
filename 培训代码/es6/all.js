
// Promise.reject('')//直接失败
// Promise.resolve('')//直接成功
// Promise.all() //接收由promise组成的数组；promise都成功之后才会走then方法 
//promise.race() 
// race 跑  谁跑的快结果就是谁 
let p1 = new Promise((resolve,reject)=>{
  console.log(1)
  setTimeout(()=>{
    resolve('1')
  },100)
})
let p2 = new Promise((resolve,reject)=>{
  console.log(2)
  reject('2')
})

Promise.all([p1,p2]).then((res)=>{
   console.log(res)
})
// 谁的快就接收谁 
Promise.race([p1,p2]).then((data)=>{
   console.log(data,'race')
},reason=>console.log(reason))