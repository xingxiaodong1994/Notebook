var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

//   console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

//   if(path === '/'){
//     response.statusCode = 200
//     response.setHeader('Content-Type', 'text/html;charset=utf-8')
//     response.write('哈哈哈')
//     response.end()
//   }else{
//     response.statusCode = 404
//     response.setHeader('Content-Type', 'text/html;charset=utf-8')
//     response.write('呜呜呜')
//     response.end()
//   }

    if(path==='/'){//如果用户请求的是 / 路径
        var string=fs.readFileSync('./src/index.html','utf8');
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/style.css'){
        var string = fs.readFileSync('./style.css','utf8')
        response.setHeader('Content-Type','text/css')
        response.write(string)
        response.end()
    }else if(path === '/main.js'){
        var string=fs.readFileSync('./main.js','utf8')
        response.setHeader('Content-Type','application/javascript')
        response.write(string)
        response.end()
    }else if(path === '/xxx'){
        response.setHeader('Content-Type','application/javascript')
        response.statusCode = 200
        response.write(`
           你向我发送了请求
        `)   //JSON+padding=JSONP         
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('找不到对应路径，你需要自行修改index.js')
        response.end()
    }






  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
