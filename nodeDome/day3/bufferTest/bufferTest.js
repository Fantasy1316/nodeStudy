'use strict';

const path = require('path');
const fs = require('fs');

//没有时间设定编码格式，默认输出格式为Buffer
// fs.readFile(path.join(__dirname, '../readFile/test.txt'), (error, data) => {
//     if(error) throw error;
//     console.log(data);
// });

//创建Buffer
//参数4:表示Buffer的大小，即能存多少东西
// let buffer = new Buffer(4);
//像buffer中写入4个字符串
// buffer.write('1234');
//输出“1234”
// console.log(buffer.toString('utf8'));

// let buffer2 = new Buffer(4);
// buffer2.write('123456');
//任然输出“1234”，产出的部分溢出
// console.log(buffer2.toString('utf8'));

//读图片
fs.readFile(path.join(__dirname, './jayChou.png'),(error, data)=>{
    var image = data.toString('base64');
    console.log(image);
});