'use strict'
//path模块的使用

const path = require('path');
const temp = path.join(__dirname, './lyrics/致青春.lrc')


//path.basename(p[, ext]);  获取文件名
// console.log(path.basename(temp));
//去除扩展名：传入扩展名参数即可
// console.log(path.basename(temp,'.lrc'));


//path.delimiter;  获取当前系统路径默认的系统分割符 Windows输出‘;’
// console.log(path.delimiter);
//获取环境变量
// console.log(process.env.PATH.split(path.delimiter));


//path.dirname(p);  获取目录名称
// console.log(path.dirname(temp));


//path.extname(p);  获取路径子那个的扩展名，包含‘.’
// console.log(path.extname(temp));


//path.parse(pathString);  讲一个路径字符串转换成路径对象，包含很多属性
// let obj = path.parse(temp);
//console.log(obj);
// 返回值：{ root: 'D:\\',
//          dir: 'D:\\nodeWeb\\nodeStudy\\nodeDome\\day3\\path\\lyrics',
//          base: '致青春.lrc',
//          ext: '.lrc',
//          name: '致青春' }


//path.format(pathObjrct);  讲一个路径对象转换成路径字符串，与path.parse(pathString)相反
//console.log(path.format(obj));


//path.isAbsolute(path);  判断一个路径是否为绝对路径，返回true/false
// 


//path.jion([psth1] [,path2] [path3].....)  拼接路径


//path.normalize(p)  常规化一个路径
// let patha = path.normalize('C://ab\\cd/////efg\//something');
// console.log(patha);
// 返回：C:\ab\cd\efg\something


//path.relative(form, to)  获取to相对于from的相对路径
//let somePath = path.relative(__dirname, 'D:\\nodeWeb\\nodeStudy\\nodeDome\\day3\\path\\lyrics\\致青春.lrc');
//console.log(somePath);


//path.resolve([from...], to)  拼接路径，不同于pat.jion()


//path.sep  获取当前系统中默认路径成员峰符,windows返回\
//console.log(path.sep);


//path.win32  允许在任意操作系统上用Windows的方法操作路径【Win32指Windows操作系统，不是Windows32位操作系统】
//path.posix   允许在任意操作系统上用Linux的方法操作路径