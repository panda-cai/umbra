const express=require("express");
const pool=require("../pool.js");
//创建路由器
const router=express.Router();
//1.注册用户
router.post("/register",(req,res)=>{
  var obj=req.body;
  var code=401;
  for(var key in obj){
    //console.log(obj[key]);
    code++;
    if(!obj[key]){
    res.send(`${code},${key} is require`);
    return;
    }
  }
  pool.query("INSERT INTO umbra_user SET ?",[obj],(err,result)=>{
    if(err) throw err;
    result.affectedRows>0?res.send("register suc"):res.send("register false");
  });
});
//2.用户登录
router.post("/login",(req,res)=>{
  console.log("链接成功");
  var obj=req.body;
  var $email=obj.email;
  var $upwd=obj.upwd;
  if(!$email){
    res.send("email is require");
    return;
  }
  if(!$upwd){
    res.send("upwd is require");
    return;
  }
  pool.query("SELECT * FROM umbra_user WHERE email=? and upwd=?",[$email,$upwd],(err,result)=>{
    result.length>0?res.send("login suc"):res.send("login false");
  });
});
//3.用户检索detail
router.get("/detail",(req,res)=>{
  var $email=req.query.email;
  if(!$email){res.send("email is require");return;}
  pool.query("SELECT * FROM umbra_user WHERE email=?",[$email],(err,result)=>{
    result.length>0?res.send(result):res.send("search false");
  });
});

//0默认访问文件index.html
router.use("/",(req,res)=>{
  res.redirect("127.0.0.1/index.html");
});
//导出路由器
module.exports=router;