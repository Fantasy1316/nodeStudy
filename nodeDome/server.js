var http = require('http')
var querystring = require('querystring')

setInterval(function () {
    var postData = querystring.stringify({
        'mobilephone': 'HH4w6JINMDx40MYvSBdt9ztnsMXcykP5idyEjSX1mtVebalPilh3Tqs2MMPC+alY+o0Ed0MIaZetaDhu2q577mmt65zVUC8eBCitk9BRhlkhJYBcYE3OLNkiYF2xigeyBPAPW+NCz9mT37L3cpcAi7WUaco0Pe+lZERcjMZrBDg='
    })
    var options = {
        hostname: 'user.news.cn',
        port: 80,
        path: '/puser;jsessionid=D24DFCCFE3C3A3A644B4F3A0EBBBB067/regsendcode',
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Content-Length': 194,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': 'wdcid=1508b4234c5a6d99;JSESSIONID=D24DFCCFE3C3A3A644B4F3A0EBBBB067; SERVERID=c16c2d45cbb3796a6e68acfc1d76be14|1524533225|1524533160',
            'Host': 'user.news.cn',
            'Origin': 'http://user.news.cn',
            'Referer': 'http://user.news.cn/user/reg',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        }
    }

    var req = http.request(options, function (res) {
        console.log('Status:' + res.statusCode)
        console.log('Headers:' + JSON.stringify(res.headers))

        res.on('data', function (chunk) {
            console.log(Buffer.isBuffer(chunk))
            console.log(typeof chunk)
        })

        res.on('end', function () {
            console.log("OK!!!")
        })
    })

    req.on('error', function (e) {
        console.log('Error:' + e.message)
    })

    req.write(postData)
    req.end()

}, 65000)