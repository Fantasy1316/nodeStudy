'use strict'

const path = require('path');
const fs = require('fs');

//载入mkdir.js模块
const mkdir = require('./mkdir');

mkdir(path.join(__dirname, './mode1/mode2/mode3/mode4'), (error) => {
    console.log(error);
});