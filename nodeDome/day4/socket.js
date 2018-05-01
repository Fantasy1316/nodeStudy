//创建Socket连接

'use strict';
const net = require('net');

let server = net.createServer(function socketContent(socket) {
    let client = socket.address();
    console.log(client.address + 'content......');

    socket.on('data', (chunk) =>{
        console.log(chunk.toString());
    });
})

let port = 2080;
server.listen(port, (err) => {
    if (err) {
        console.log(`【${port}】端口被占用！`);
    }
    console.log(`成功监听【${port}】端口`)
});