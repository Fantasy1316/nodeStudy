//同步读取文件和异步读取文件。在不选择编码格式的情况下，默认输出格式为buffer(缓冲区)
'use strict';
const path = require('path');
const fs = require('fs');


//同步读取，阻塞，用8.1多毫秒
console.time('sync');
try {
    let data = fs.readdirSync(path.join(__dirname), 'utf8');
    console.log(data);
} catch (error) {
    throw error;
}
console.timeEnd('sync');


//异步读取,非阻塞，只用1.8多毫秒
console.time('async');
fs.readFile(path.join(__dirname, './test.txt'), 'utf8', (error, data) => {
    if (error) throw Error(error);
    console.log(data);
});
console.timeEnd('async');

