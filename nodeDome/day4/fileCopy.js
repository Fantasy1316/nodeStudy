//大文件拷贝
'use strict';

const path = require('path');
const fs = require('fs');

let rander = fs.createReadStream('D:\\BaiduNetdiskDownload\\node1.rar');
let writer = fs.createWriteStream('D:\\BaiduNetdiskDownload\\node2.rar');
fs.stat('D:\\BaiduNetdiskDownload\\node1.rar', (error, stats) => {
    if (stats) {
        // console.log(stats);
        let total = 0;
        rander.on('data', (chunk) => {
            writer.write(chunk, (error) => {
                // if(error) {throw error};
                console.log('写入进度：' + ((total += chunk.length) / stats.size) * 100 + '%');
            //1285857280    65536
            })
        })
    } else {
        throw error;
    }
})
