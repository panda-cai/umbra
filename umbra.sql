#设置跟数据库链接的字符编码位utf-8
SET NAMES UTF8;
#丢弃数据库如果存在umbra的话
DROP DATABASE IF EXISTS umbra;
#创建数据库
CREATE DATABASE umbra CHARSET=UTF8;
#进入数据库
USE umbra;

#创建用户表umbra_user
CREATE TABLE umbra_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,#用户id
	email VARCHAR(64),#用户邮箱
	upwd VARCHAR(32),#用户密码
  nation VARCHAR(32),#国家
  user_name VARCHAR(32),#用户真实姓名
	address VARCHAR(128),#用户地址
  phone CHAR(11)#用户手机
);

#创建商品表
CREATE TABLE umbra_product(
	pid int PRIMARY KEY AUTO_INCREMENT,#商品id
	family_id int,#分类id
	title VARCHAR(128),#商品标题
	subtitle VARCHAR(128),#商品副标题
	pirce DECIMAL(10,2),#商品价格
	designed VARCHAR(64),#商品设计者
	stock int,#商品库存
	SKU CHAR(11),#商品的SKU
	weight DECIMAL(5,2),#商品重量
	width DECIMAL(5,2),#商品宽度
	height DECIMAL(5,2),#商品高度
	depth DECIMAL(5,2),#商品深度
	features VARCHAR(512)#商品功能
);
#向表中插入数据
INSERT INTO umbra_user VALUES(1,"godezero@live.com","123456","中国","蔡盛达","广东省广州市白云区江夏村","13416292389");