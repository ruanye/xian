const http = require('http');

// 1. 创建服务器， 2. 定义端口号 
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/json'
    });
    // 通过不同 url 返回不同的值  
    if(req.url === '/api/user'){
        res.end(JSON.stringify({name: 'user'}))    
    }
    // post 请求的不同点 需要chunk 进行一个数据处理 
    res.on('data',(chunk)=>{
        data+chunk
    })
    res.end(JSON.stringify({name: 'zhangsan'}))

})

server.listen(8080); //服务器端口号 

