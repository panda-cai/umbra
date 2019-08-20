const express = require("express");
const pool = require("../pool.js");
//创建路由器
const router = express.Router();
// 1商品导航路由
router.get("/products",(req,res)=>{
	var $pclass=req.query.pclass;
	var sql=`select * from productclass WHERE pclass=?`;
	pool.query(sql,[$pclass],(err,result)=>{
		result.length>0?res.send(result):res.send("401");
	});
});


module.exports = router;