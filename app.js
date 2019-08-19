const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./routers/user.js");
const productRouter=require("./routers/products.js");
//创建服务器
var server=express();
server.listen(3000);
//解析post请求
server.use(bodyParser.urlencoded({extended:false}));
//将静态文件托管到public文件夹
server.use(express.static("public"));
//将用户路由挂载
server.use("/user",userRouter);
server.use("/product",productRouter);