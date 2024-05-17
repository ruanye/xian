// 必考点 promise  

// promise 处理异步操作的一种机制，可以更优雅的处理异步代码，避免了回调地狱。Promise 有三种状态：Pending(等待中),Fulfilled(已成功)，Rejected(已失败)。一旦状态发生变化，就会调用相应程序处理问题。
// resolve 都是函数  表示成功 参数表示成功的值 
// reject  都是函数 表示失败  参数表示失败的原因
//特点 一旦成功了 就永远不会在失败   一旦失败了就永远不会再成功
// promise.then  仍然会返回一个 promise 可以链式调用

const myPromise = new Promise((resolve,reject)=>{
    reject('失败了')
    resolve('成功了');

    // 模拟一下异步操作
    // setTimeout(()=>{
    //   const random = Math.random();
    //   if(random>0.5){
    //      resolve(`成功了,${random}`)
    //   }else{
    //      reject(`失败了`)
    //   }
    // },1000)
})


// 所有的 promise 都会有一个 .then 方法，会有 2个参数，2 个参数都是函数，第一个函数表示成功 第二个函数表示失败
myPromise.then(function(res){
    // 成功会接受 resolve 的参数
     console.log(res)
},function(reason){
    // 失败会接受 reject 的参数
    console.log(reason)
})
// promise 好处 可以在异步成功之后继续执行其他操作 

// async await 

// async 后面跟一个函数，表示函数里面有异步操作  await 通常跟的是一个 promise 结果表示 promise 成功的值，也可以跟普通值 await 1    可以用同步的流程写法去完成一个异步操作 
