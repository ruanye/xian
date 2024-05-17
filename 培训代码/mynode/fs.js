// fs 模块 
const fs = require('fs');


// 读取文件 readFile  异步读取文件  node 文件读取，回调函数的特点  错误优先  error first 
// 如果读取大型文件 建议使用异步 

// fs.readFile('./1.txt','utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else { 
//         console.log(data);
//     }
// })

// // 同步读取文件 会阻塞代码执行

// const data = fs.readFileSync('./1.txt','utf8');
// console.log(data,'同步读取到的数据')

// // 异步写入文件 

// fs.writeFile('./2.txt','hello world','utf8',(err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('异步写入成功');
//     }
// })

// // 同步写入文件 返回布尔值 

// fs.writeFileSync('./3.txt','goodbye word','utf8');

// // fs.existsSync(path)  判断文件或者目录是否存在

// let isHas = fs.existsSync('./m')
// console.log(isHas);

// // 删除文件 fs.unlink(path, callback)

// fs.unlink('./2.txt',(err,data)=>{
//     if(err)console.log(err)
//     console.log('删除成功')
// })

// fs.stat 用来获取文件或者目录的状态  

fs.stat('./doc',(err,stat)=>{
     console.log(stat)
     console.log(stat.isFile(),'是否是文件') 
     console.log(stat.isDirectory(),'是否是文件夹')
})

