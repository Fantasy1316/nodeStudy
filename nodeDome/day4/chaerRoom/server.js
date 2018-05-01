//创建Socket连接
'use strict';
const net = require('net');

let clients = [];

let server = net.createServer((socket) => {
    clients.push(socket);
    console.log(`Welcome ${socket.remoteAddress} to 2080 chatroom`);

    function boardcast(signal) {
        // 肯定有用户名和消息
        let username = signal.from;
        let message = signal.message;
        // 我们要发给客户端的东西
        let send = {
            procotol: signal.procotol,
            from: username,
            message: message
        };
        // 广播消息
        clients.forEach(client => {
            client.write(JSON.stringify(send));
        });
    }

    socket.on('data', (chunk) => {
        try {
            let signal = JSON.parse(chunk.toString().trim());
            let procotol = signal.procotol;
            switch (procotol) {
                case 'boardcast':
                    boardcast(signal)
                    break;
                default:
                    socket.write('协议错误！')
                    break;
            }
        } catch (error) {
            socket.write('ERROR!无法解析！');
        }

    });
})

let port = 2080;
server.listen(port, (err) => {
    if (err) {
        console.log(`【${port}】端口被占用！`);
    }
    console.log(`成功监听【${port}】端口`)
});