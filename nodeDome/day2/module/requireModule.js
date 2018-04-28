//自己写一个require方法
'use strict';
//1.先找文件，不存在抛出错误
//2.读取文件内容（js代码）
//3.执行代码
//4.返回值

const fs = require('fs');
const path = require('path');

function $require(id) {
    const fiLename = path.join(__dirname, id);
    const dirname = path.dirname(fiLename);

    let code = fs.readFileSync(fiLename, 'utf8');
    let module = { id: fiLename, exports: {} };
    //定义exports，让它指向module的exports属性
    let exports = module.exports;

    code = `(($require, module,  __filename) => {
        ${code}
    })($require, module, exports, __dirname, __filename);`;

    //执行读取到的代码
    eval(code);

    return module.exports;
}

const module_1 = $require('./sayHello.js');
module_1.say("hello");