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
	uid INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(64),
	upwd VARCHAR(32),
  nation VARCHAR(32),
  user_name VARCHAR(32),
	address VARCHAR(128),
  phone CHAR(11)
);
#向表中插入数据
INSERT INTO umbra_user VALUES(1,"godezero@live.com","123456","中国","蔡盛达","广东省广州市白云区江夏村","13416292389");