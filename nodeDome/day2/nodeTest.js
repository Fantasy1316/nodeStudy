const fs = require('fs')

fs.stat('./list.md', (err, stats) => {
    //判断list.md是否存在
    if (err) {
        console.log('文件不存在！');
        fs.writeFile('./list.md', new Date(), (err) => {
            if (err) {
                console.log(err);
                return false;
            } else {
                console.log('文件创建成功！')
            }
        });
    } else {
        //存在文件，然后删除
        fs.unlink('./list.md', (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            //创建文件
            fs.writeFile('./list.md', new Date(), (err) => {
                if (err) {
                    console.log(err);
                    return false;
                } else {
                    console.log('文件删除后创建成功！')
                }
            });
        });
    }
});