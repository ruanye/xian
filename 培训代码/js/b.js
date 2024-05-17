// 回调函数  

const fn = function (callback) {
    setTimeout(() => {
        let message = 'hello world';
        callback(message)
    }, 300);
}

let fn2 = function (data){
     console.log(`获取到的数据为${data}`);
} 

fn(fn2)