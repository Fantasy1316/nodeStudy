'sue strict'

setInterval(() => {
    //清除缓存
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key];
    });

    let date = require('./date');
    console.log(date.getTime());
    console.log(require.cache);
}, 1000);

//于requir的缓存机制（require.cache），每一次console.log的只都是一样的
//通过删除require对象的cache属性从而达到清除缓存的目的