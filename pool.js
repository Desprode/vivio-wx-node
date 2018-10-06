//1.加载模块  mysql
//2.创建连接池对象
//3.导出
const mysql=require("mysql");
var pool=mysql.createPool({
    host:'127.0.0.1',     //mysql数据库地址
    user:'root',          //连接mysql数据库的用户名  
    password:'',          //连接mysql数据库的密码
    database:'vivoWX',   //操作那个数据库
    port:3306,            //端口号
    connectionLimit:100   //活动连接数量
});
module.exports=pool;