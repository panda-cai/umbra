const express = require("express");
const pool = require("../pool.js");
//创建路由器
const router = express.Router();
// 1商品导航路由
router.get("/products",(req,res)=>{
	var sql=`select * from productclass`;
	pool.query(sql,(err,result)=>{
		result.length>0?res.send(result):res.send("401");
	});
});


module.exports = router;