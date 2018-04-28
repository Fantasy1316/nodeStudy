//readLine滚动歌词

'use strict';
const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');
const readline = require('readline');

let filename = path.join(__dirname, '../path/lyrics/致青春.lrc');

//创建一个可读流
let streamReader = fs.createReadStream(filename)
    .pipe(iconv.decodeStream('GBK'));

let ls = readline.createInterface({ input: streamReader });

let begin = new Date().getTime();

ls.on('line', (line) => {
    task(line, begin);
});


/*
*这种方法也可以用流的方式读取文件，但是需要文件全部读取完才能加载，
*相较于readline不太好
*
*let data = '';
*streamReader.on('data', (chunk) => {
*    data += chunk.toString();
*});
*streamReader.on('end', () => {
*    //此时数据已经读取完毕，data是一个完整的文档
*    console.log(data);
*});
*/


let regx = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
function task(line, begin) {
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
}