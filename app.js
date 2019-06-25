const express=require("express");
//创建服务器
var server=express();
server.listen(3000);
//将静态文件托管到public文件夹
server.use(express.static("public"));