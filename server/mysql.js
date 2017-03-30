/**
 * Created by dell on 2017/3/29.
 */
var mysql = require("mysql");
var pool = mysql.createPool({
  host:"localhost",
  port:3306,
  user:"root",
  password:"",
  database:"myblog"
});

function query(sql,callback){
  pool.getConnection(function(err,connection){
    connection.query(sql, function (err,rows) {
      callback(err,rows);
      connection.release();
    });
  });
}

exports.query = query;