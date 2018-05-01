//pipe方法拷贝文件
'use strict';

const path = require('path');
const fs = require('fs');

let rander = fs.createReadStream('D:\\BaiduNetdiskDownload\\node1.rar');
let writer = fs.createWriteStream('D:\\BaiduNetdiskDownload\\node3.rar');

rander
    .pipe(writer);