//1.定义module（在NODE中是按照Commonjs规范来实现的）

function _typeChange(input){
    return parseFloat(input);
}

function add(a,b) {
    return -_typeChange(a) + -_typeChange(b);
}

function reduce(a,b) {
    return -_typeChange(a) - -_typeChange(b);
}

function cheng(a,b) {
    return -_typeChange(a) * -_typeChange(b);
}

function chu(a,b) {
    return -_typeChange(a) / -_typeChange(b);
}

module.exports = {add, reduce, cheng, chu}