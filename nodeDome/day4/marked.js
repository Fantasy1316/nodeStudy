'use strict';

const path = require('path');
const fs = require('fs');
const marked = require('marked');

let target = path.join(__dirname, '../../README.md');

fs.watchFile(target, (curr, prev) => {
    if (curr.mtime === prev.mtime) {
        return false;
    } else {
        fs.readFile(target, 'utf8', (error, content) => {
            if (error) {
                throw error;
            }
            let html = marked(content);
            html = templete.replace('{{{ content }}}', html);
            fs.writeFile(target.replace('.md', '.html'), html, 'utf8', (error) => {
                if (error) { throw console.error(); }
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
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <div> {{{ content }}} </div>   
</body>
</html>
`;