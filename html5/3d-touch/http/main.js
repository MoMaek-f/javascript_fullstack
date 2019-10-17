var http = require('http');//node底层 核心库
console.log(http)
var fs = require('fs');  //引入文件库
var path = require('path');
// web服务本质上 有n人来访问网站 request
// 网站的开发者 响应用户的请求 res wenda
http.createServer(function(req,res)//创建web服务
{
    if(req.url=='/iages/sloth.png'){
        console.log('图片')
        //将图片资源返回给用户
        res.writeHead(200,{'Content-Type':'image/png'});
        let imgStream = fs.createReadStream(
            path.join(_dirname,'sloth.png')
        );
        imgStream.pipe(res);
        return;

    }
    // console.log(req.url);
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // res.write("(0)Error");
    let fileStream = fs.createReadStream(path.join(_dirname, 'index.html'))
    fileStream.pipe(res);
})
.listen(1200)