'use strict';

const path = require('path');
const fs = require('fs');
const marked = require('marked');
const browserSync = require('browser-sync');

let target = path.join(__dirname, '../../README.md');

let fileName = target.replace(path.extname(target), '.html');

let indexName = path.basename(fileName);

//通过 broswerSync 创建一个文件服务器
browserSync({
    server: path.dirname(target),
    index: indexName
});

fs.watchFile(target,{interval: 200}, (curr, prev) => {
    if (curr.mtime === prev.mtime) {
        return false;
    } else {
        fs.readFile(target, 'utf8', (error, content) => {
            if (error) {
                throw error;
            }
            let html = marked(content);
            fs.readFile(path.join(__dirname, './github.css'), 'utf8', (error, css) => {
                if(error) throw error;
                html = templete.replace('{{{ content }}}', html).replace('{{{ css }}}', css);
                fs.writeFile(fileName, html, 'utf8', (error) => {
                    browserSync.reload(indexName);
                    if (error) { throw console.error(); }
                });
            });
        });
    }
});


let templete = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>{{{ css }}}</style>   
</head>
<body>
    <div class='vs'> {{{ content }}} </div>   
</body>
</html>
`;