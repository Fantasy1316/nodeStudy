//实现控制台输入表达式，返回表达式执行结果
// 'use strict';
//1.接收参数：
const arge = process.argv.slice(2);

//2.参数处理：
const arge1 = arge[0] / 1;
const arge2 = arge[1];
const arge3 = arge[2] / 1;

//3.判断参数类型
// if (typeof arge1 !== 'number' || typeof arge3 !== 'number') {
//     console('你输入的不是数字！');
// } else {
//     let result;
//     switch (arge2) {
//         case '+':
//             result = parseInt(arge1) + parseInt(arge3);
//             break;
//         case '-':
//             result = parseInt(arge1) - parseInt(arge3);
//             break;
//         case '*':
//         case 'x':
//             result = parseInt(arge1) * parseInt(arge3);
//             break;
//         case '/':
//         case '÷':
//             result = parseInt(arge1) / parseInt(arge3);
//             break;
//         default:
//             console.log('不支持该操作符！');
//     }

//     console.log(result);
// }

//加载conterModule模块
const conter = require('./module/conterModule.js');

let result;
    switch (arge2) {
        case '+':
            result = conter.add(arge1, arge3);
            break;
        case '-':
        result = conter.reduce(arge1, arge3);
            break;
        case '*':
        case 'x':
        result = conter.cheng(arge1, arge3);
            break;
        case '/':
        case '÷':
        result = conter.chu(arge1, arge3);
            break;
        default:
            console.log('不支持该操作符！');
    }

    console.log(result);