//1:加载响应的模块
const express = require("express");
const fs = require("fs");       //使用文件移动功能
const multer = require("multer");  //上传文件模块
const pool = require("./pool");
//2:创建express对象
var app = express();
//3:指定静态目录
app.use(express.static(__dirname+"/public"))
//4:启动监听端口
app.listen(3000)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*================================================请求轮播图片==========================================================*/ 
app.get("/carouselList",(req,res)=>{
  var sql = "SELECT id,img_url,title FROM carouselList";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

/*================================================请求首页热销商品==========================================================*/ 
app.get("/hotList",(req,res)=>{
  var sql = "SELECT t.id,t.title,t.sub_title,t.price,t.tid,p.sm_url FROM indexList t INNER JOIN indexImg p ON t.id = p.tid WHERE t.tid <= ?";
  pool.query(sql,[4],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

/*================================================请求详情页商品==========================================================*/ 
app.get("/shopList",(req,res)=>{
  var tid = req.query.tid;
  var sql = "SELECT id,sm_url,md_url,lg_url,prod_title,prod_type,prod_detail,prod_price,tid FROM indexImg WHERE tid = ?";
  pool.query(sql,[tid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});
/**====================================================请求商品也详情图片======================================================================= */
/**=================没有数据库,直接发送图片地址============== */
app.get("/prodImageList",(req,res)=>{
  var rows = [
    {id:1,img_url:""}
  ];
})
/**======================================================选购页商品========================================= */
app.get("/buylist",(req,res)=>{
  var list = {
    "List": [
      {
        'A': [
          { name: 'NEX' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'B': [
          { name: 'X系列' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'C': [
          { name: 'Z系列' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'D': [
          { name: 'Y系列' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'E': [
          { name: '充电' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'F': [
          { name: '配件' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'G': [
          { name: '音乐' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'H': [
          { name: '智能' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'I': [
          { name: '摄影' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'J': [
          { name: '摄影' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'K': [
          { name: '生活' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ],
        'L': [
          { name: '体验店' },
          { 'picture': 'http://127.0.0.1:3000/index/5086_1534837472634hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://127.0.0.1:3000/index/5097_1534838056337hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/5080_1534836576680hd_bi_750x750.png', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' },
          { 'picture': 'http://localhost:3000/detail/820373566423359681.jpg', 'desc': 'NEX','title':'6GB+12GB','price':'4298.00' }
        ]
      }
    ],
  };
  res.send(list)
})

/**==================================================添加购物车===================================== */
// app.get('/cartList',(req,res)=>{
//   var sm_url = req.query.sm_url;
//   var prod_title = req.query.prod_title;
//   var prod_type = req.query.prod_type;
//   var prod_price = req.query.prod_price;
//   var sql = "INSERT INTO cartList VALUES(null,?,?,?,?,1,false)"
//   pool.query(sql,[sm_url,prod_title,prod_type,prod_price],(err,result)=>{
//     if(err) throw err;
//     res.send({code:1,msg:'add success'});
//   })
// })

app.get('/cartList',(req,res)=>{
  var progress = 0;
  var pid = req.query.pid;
  var sm_url = req.query.sm_url;
  var prod_title = req.query.prod_title;
  var prod_type = req.query.prod_type;
  var prod_price = req.query.prod_price;
  var num = req.query.num;
  var sql = "SELECT * FROM cartlist WHERE pid = ?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    if(result.length == 0){
      var sql = "INSERT INTO cartList VALUES(null,?,?,?,?,1,?,false)"
      pool.query(sql,[sm_url,prod_title,prod_type,prod_price,pid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:'insert success'});
    })
    }else{
      var sql="UPDATE cartlist SET num=num+? where pid=?";
      pool.query(sql,[num,pid],(err,result)=>{
        if(err) throw err;
       res.send({code:1,msg:'update success'});
      })
    }
  })
})
/**===============================================查询购物车============================================== */
app.get('/selectCart',(req,res)=>{
  var sql = 'SELECT id,sm_url,prod_title,prod_type,prod_price,num,pid,selected FROM cartList';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:result});
  });
});
/**删除购物车 */
app.get('/deleteCart',(req,res)=>{
  var id = req.query.id;
  var sql = 'DELETE FROM cartList WHERE id = ?';
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:'delete success'});
  });
});
/**选中商品时selected改为true */
app.get("/isSelected",(req,res)=>{
  var id = req.query.id;
  var sql = "UPDATE cartlist SET selected = 'true' WHERE id = ?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"update success"});
  })
})
//全选
app.get("/isSelectedAll",(req,res)=>{
  var sql = "UPDATE cartlist SET selected = 'true'" ;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"update success"})
  });
})
/*=============================未选中功能的该为false==================================== */
app.get("/noSelected",(req,res)=>{
  var id = req.query.id;
  var sql = "UPDATE cartlist SET selected = 'false' WHERE id = ?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"update success"});
  })
});
//全不选
app.get("/noSelectedAll",(req,res)=>{
  var sql = "UPDATE cartlist SET selected = 'false'";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"update success"});
  })
});
/**========================================================购买购物车选中的商品======================================= */
app.get("/buySelected",(req,res)=>{
  var sql = "SELECT sm_url,prod_title,prod_price,num FROM cartlist WHERE selected = 'true'";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    
    res.send({code:1,msg:result});
  });
});
/**================================================购物车增加功能========================================================= */
app.get("/addItem",(req,res)=>{
  var pid = req.query.pid;
  var sql = "UPDATE cartlist SET num=num+1 where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:'add success'})
  });
});
app.get("/reduceItem",(req,res)=>{
  var pid = req.query.pid;
  var sql = "UPDATE cartlist SET num=num-1 where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:'reduce success'})
  });
});
/**======================================================消息列表================================================== */
app.get("/messageList",(req,res)=>{
  var row=[
    {id:1,img_url:'http://127.0.0.1:3000/index/photo2.jpg',title:'光感美学X23明日上线',time:'2018-8-8',subtitle:'王牌新品明日首发,还有抽奖和直播'},
    {id:2,img_url:'http://127.0.0.1:3000/index/photo1.jpg',title:'X23王牌首发持续上线',time:'2018-8-8',subtitle:'你pick哪个颜色'},
    {id:3,img_url:'http://127.0.0.1:3000/index/photo3.jpg',title:'幸运大抽奖',time:'2018-9-8',subtitle:'等你来抽奖'},
    {id:4,img_url:'http://127.0.0.1:3000/index/photo4.jpg',title:'照亮你的美',time:'2018-10-8',subtitle:'逆光也清晰'}
  ];
  res.send({code:1,msg:row});
})