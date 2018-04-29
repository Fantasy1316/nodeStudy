//定义一个创建文件夹的模块
'use strict';

const path = require('path');
const fs = require('fs');


function mkDir(pathName, callback) {
    //定义根路径，而不用__dirname
    let root = path.dirname(module.parent.filename);

    //获取路径，并判断是否为绝对路径
    pathName = path.isAbsolute(pathName) ? pathName : path.join(root, pathName);

    //处理路径
    let relativePath = path.relative(root, pathName);
    let floders = relativePath.split(path.sep);

    try {
        //定义一个变量，用于存储路径级
        let pre = '';
        //遍历relativePath
        floders.forEach((floder) => {
            //判断文件夹是否存在
            try {
                //文件夹存在，不做任何事
                fs.statSync(path.join(root, pre, floder));
            } catch (error) {
                //文件夹不存在，创建文件夹
                fs.mkdirSync(path.join(root, pre, floder));
            }
            pre = path.join(pre, floder);
        });
        callback && callback(null);
    } catch (error) {
        callback && callback();
    }
}

module.exports = mkDir;