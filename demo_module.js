// require 导入模块
var http = require('http');
var dt = require('./myfirstmodule')

http.createServer(function(req, resp){
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.write("The date and time are currently: " + dt.myDateTime());
  resp.end();

}).listen(8000);
