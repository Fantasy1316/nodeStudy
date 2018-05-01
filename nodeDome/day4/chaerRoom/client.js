'use strict';
const net = require('net');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Whats your name?', (name) => {
    name = name.trim();

    if (!name) {
        throw new Error('姓名不能为空！')
    }
    let server = net.connect({ port: 2080 }, () => {
        console.log(`Welcome ${name} to 2080 chartroom`);
        server.on('data', (chunk) => {
            try {
                let signal = JSON.parse(chunk.toString().trim());
                let procotol = signal.procotol;
                switch (procotol) {
                    case 'boardcast':
                        console.log('\nboardcast');
                        console.log(signal.from + '>');
                        console.log(signal.message);
                        rl.prompt();
                        break;
                    default:
                        server.write('协议错误！');
                        break;
                }
            } catch (error) {
                server.write('ERROR!无法解析！');
            }

        });
    });

    rl.setPrompt(name + '>');
    rl.prompt();

    rl.on('line', (line) => {
        let send = {
            procotol: 'boardcast',
            from: name,
            message: line.toString().trim()
        };
        server.write(JSON.stringify(send));
        rl.prompt();
    }).on('close', () => {
        //   console.log('Have a great day!');
        //   process.exit(0);
    });
});