var fs = require('fs');

// 追加文件内容
// fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err) {
//   if(err){
//     throw err;
//   }
//   console.log('saved');
// });

// 打开文件
// fs.open('mynewfile2.txt', 'w', function(err, file){
//   if(err) throw err;
//   console.log('Opened');
// });

// 写入文件(覆盖已存在内容)
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// 删除文件
// fs.unlink('mynewfile2.txt', function(err) {
//   if(err) throw err;
//   console.log('File deleted');
// });

// 重命名文件
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
  if(err) throw err;
  console.log('File renamed');
});
