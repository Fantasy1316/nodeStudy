//滚动歌词

'use strict';
const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname, '../path/lyrics/致青春.lrc'), (error, data) => {
    if (error) throw error;
    let lines = iconv.decode(data, 'GBK').split('\n');
    // console.log(lines);
    //[00:09.88]他不羁的脸像天色将晚
    let regx = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;

    //因为任务下达有时差，所以需处理
    let begin = new Date().getTime();

    lines.forEach((line) => {
        let matches = regx.exec(line);
        if (matches) {
            let m = parseFloat(matches[1]);
            let s = parseFloat(matches[2]);
            let f = parseFloat(matches[3]);
            let lyric = matches[4];

            //处理时差问题，获取时间
            let offset = new Date().getTime() - begin;

            setTimeout(() => {
                console.log(m * 60 * 1000 + s * 60 + f - offset);
                console.log(lyric);
            }, m * 60 * 1000 + s * 1000 + f - offset)
        } else {
            //不是歌词！
            console.log(line)
        }
    });

});