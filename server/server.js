/**
 * Created by dell on 2017/3/7.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../');

var query=require("./mysql.js");

app.use(express.static(ROOT_PATH + '/dist'));//将静态资源指向dist目录
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));


// let username='yang';
// let password=123456;
// query.query("INSERT INTO user_info(username,password) VALUES('"+username+"','"+password+"')",function(err,rows){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('success',rows);
//   }
// });

app.get('*', function (req, res) {
  res.sendFile(ROOT_PATH+'/dist/index.html');
});

app.post('/api/articleList',function(req,res){
  query.query("select * from articleList",function(err,rows){
    if(err){
      console.log(err);
    }else {
      let arr = Object.keys(rows).map(key=> rows[key]);
      console.log(arr instanceof Array);
      res.send(arr);
    }
  });
});

app.post('/api/articleDetail',function(req,res){
  query.query("select * from articleList where articleList.tid="+req.body.id,function(err,rows){
    if(err){
      console.log(err);
    }else {
      res.send(rows[0]);
    }
  });
});

app.post('/api/write',function(req,res){
  query.query("insert into articleList(article_author,article_title,article_content) " +
    "values('"+req.body.author+"','"+req.body.title+"','"+req.body.content+"')",function (err,rows) {
    if(err){
      console.log(err);
    }else{
      console.log('success',rows);
    }
  })
});

app.listen(3000);