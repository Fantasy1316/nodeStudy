//递归实现目录的虚幻输出
'use strict';

const path = require('path');
const fs = require('fs');

//获取输入
let target = path.join(__dirname, process.argv[2] || './');

function recursion(target, depth) {
    let prefix = new Array(depth + 1).join('│ ');
    let diesInfos = fs.readdirSync(target);

    let dirs = [];
    let files = [];

    diesInfos.forEach((info) => {
        let stats = fs.statSync(path.join(target, info));
        if (stats.isFile()) {
            files.push(info);
        } else {
            dirs.push(info);
        }
    });

    //┣├──
    dirs.forEach((dir) => {
        console.log(`${prefix}├──${dir}`);
        recursion(path.join(target, dir), depth + 1);
    });

    let fileLength = files.length - 1;
    files.forEach((file) => {
        console.log(`${prefix}${fileLength-- ? '├──' : '└──'}${file}`);
    });
}

recursion(target, 0);