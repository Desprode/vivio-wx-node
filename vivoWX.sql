DROP DATABASE IF EXISTS vivoWX;
#特殊要求:苹果手机 utf8mbs
CREATE DATABASE vivoWX CHARSET=UTF8;
USE vivoWX;
###############################################################轮播表#############################################################################
CREATE TABLE carouselList(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(248),
    title VARCHAR(255)
);
INSERT INTO carouselList VALUES(null,'http://127.0.0.1:3000/carousel/banner1.png','phone');
INSERT INTO carouselList VALUES(null,'http://127.0.0.1:3000/carousel/banner2.png','phone');
INSERT INTO carouselList VALUES(null,'http://127.0.0.1:3000/carousel/banner3.png','phone');
INSERT INTO carouselList VALUES(null,'http://127.0.0.1:3000/carousel/banner4.png','phone');
############################################################首页商品图片表##########################################################################
CREATE TABLE indexList(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    sub_title VARCHAR(255),
    price DECIMAL(10,2),
    tid INT(8)
);
INSERT INTO indexList VALUES(null,'x21指纹版','6+12GB','2998.00',1);
INSERT INTO indexList VALUES(null,'x21指纹版','6+12GB','2998.00',2);
INSERT INTO indexList VALUES(null,'x21指纹版','6+12GB','2998.00','6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)',3);
INSERT INTO indexList VALUES(null,'x21指纹版','6+12GB','2998.00','6.26新一代全面屏,64GB大内存,AI智慧双摄,骁龙660AIE处理器,Jovi智能助手(付款订单将7日内发货)',4);

/*==================================================首页图片及详情页图片表=================================================================*/
CREATE TABLE indexImg(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sm_url VARCHAR(248),
    md_url VARCHAR(248),
    lg_url VARCHAR(248),
    tid INT(8)
);
INSERT INTO indexImg VALUES(null,'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png','http://127.0.0.1:3000/index/4864_1526305389832hd_250x250.png','http://127.0.0.1:3000/index/4864_1526305389832hd_250x250.png','1');
INSERT INTO indexImg VALUES(null,'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png','http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png','http://127.0.0.1:3000/index/4864_1526305389832hd_250x250.png','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2');

INSERT INTO indexImg VALUES(null,'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png','http://localhost:3000/detail/780856112798843206.png','http://localhost:3000/detail/160802234300531901.png','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','3999.00','3');
INSERT INTO indexImg VALUES(null,'http://localhost:3000/detail/820373566423359681.jpg','http://localhost:3000/detail/16034936659230822.jpg','http://localhost:3000/detail/190714283305194817.jpg','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2998.00','4');


INSERT INTO indexImg VALUES(null,'http://localhost:3000/index/10334_1534839351307_250x250.png','http://localhost:3000/index/10335_1534841855778_250x250.png','http://localhost:3000/index/10336_1534842312070_250x250.png','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2998.00','4');
INSERT INTO indexImg VALUES(null,'http://localhost:3000/detail/16034936659230822.jpg','http://localhost:3000/detail/820373566423359681.jpg','http://localhost:3000/detail/190714283305194817.jpg','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2998.00','4');

INSERT INTO indexImg VALUES(null,'http://localhost:3000/detail/16034936659230822.jpg','http://localhost:3000/detail/820373566423359681.jpg','http://localhost:3000/detail/190714283305194817.jpg','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2998.00','4');
INSERT INTO indexImg VALUES(null,'http://localhost:3000/detail/16034936659230822.jpg','http://localhost:3000/detail/820373566423359681.jpg','http://localhost:3000/detail/190714283305194817.jpg','X21全面屏6GB+12GB','93%占屏比,超大视野.128G大内存,3D曲面屏玻璃背部,前后2400万感光单元','2998.00','4');
/*购物车列表*/
CREATE TABLE cartList(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sm_url VARCHAR(248),
    prod_title VARCHAR(255),
    prod_type VARCHAR(255),
    prod_price VARCHAR(48)
);
INSERT INTO cartList VALUES(null,'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png','X21','6+12GB','4298.00')

