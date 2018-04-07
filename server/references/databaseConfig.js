var mysql = require('mysql');

var db_port = '3306';
var db_user = 'root';
var db_pw = 'new-password';
var db_host = '127.0.0.1';
// var db_host = 'tndn.ci6p4htbv8yf.ap-northeast-1.rds.amazonaws.com';
var db_database = 'database_name';

var config = {
  host: db_host,
  user: db_user,
  password: db_pw,
  database: db_database,
  connectionLimit: 30
};

var pool = mysql.createPool(config); 

module.exports = pool;
