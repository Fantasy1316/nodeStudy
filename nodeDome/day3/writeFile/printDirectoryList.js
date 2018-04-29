//读取目录列表,如果输入目录名称，则打印该目录下的目录列表，没有输入则打印当前目录下的目录列表
'use strict';

const path = require('path');
const fs = require('fs');

//获取输入
let target = path.join(__dirname, process.argv[2] || './');

fs.readdir(target, (error, files) => {
    if(error) console.log(error);
    files.forEach((file) => {
        fs.stat(path.join(target, file),(error, stats) => {
            if(error) console.log(error);
            console.log(`${stats.mtime}\t${stats.size}\t${file}`);
        });
    })
});
