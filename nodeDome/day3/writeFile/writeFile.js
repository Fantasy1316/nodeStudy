//文件写入

'use strict';

const path = require('path');
const fs = require('fs');


//异步写文件，默认覆盖文件
// fs.writeFile(path.join(__dirname, '../readFile/test.txt'), 'hello nodejs', (err) => {
//     if (err) {
//         console.log('Error!');
//     } else {
//         console.log('Success!');
//     }
// });

//同步写文件，默认覆盖文件
// try {
//     fs.writeFile(path.join(__dirname, '../readFile/test.txt'), 'hello world');
//     console.log('success!!');
// } catch (error) {
//     console.log(error);
// }

//文件流的方式写入文件，默认覆盖文件
// let streamWrite = fs.createWriteStream(path.join(__dirname, '../readFile/test.txt'));

// setInterval(() => {
//     streamWrite.write('hello...\n', () => {
//         console.log('+1');
//     });
// }, 1000);

/* ---------------文件追加内容--------------- */
// fs.appendFile(path.join(__dirname, '../readFile/test.txt'), 'hello++\n', (err) => {
//    if (err) {
//         console.log('Error!');
//     } else {
//         console.log('Success!');
//     }
// });

/* ---------------文件重命名--------------- */
//异步方法
// let oldPath = path.join(__dirname, '../readFile/test.txt');
// let newPath = path.join(__dirname, '../readFile/test1.txt');
// fs.rename(oldPath, newPath, (error) => {
//     if(error) console.log(error);
//     console.log('success!')
// });

//同步方法
// let oldPath1 = path.join(__dirname, '../readFile/test.txt');
// let newPath1 = path.join(__dirname, '../readFile/test1.txt');
// fs.rename(oldPath, newPath);

//还可以通过重命名文件来移动文件

// let currentPath = path.join(__dirname, '../readFile/test1.txt');
// let targetPath = path.join(__dirname, '../writeFile/test1.txt');

// fs.rename(currentPath, targetPath, (error) => {
//     if(error) console.log(error);
//     console.log('success!')
// });


/* ---------------文件删除--------------- */
//异步删除文件
fs.unlink(path.join(__dirname, '../READEME.md'), (error) => {
    if(error) console.log(error);
    console.log('delete file success!')
});
//同步删除 fs.unlink(path);