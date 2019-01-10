var mysql=require('mysql');
var keys=require('./config/keys');

module.exports=function(){
var conn=mysql.createConnection({
  host:keys.host,
  user:keys.user,
  password:keys.password,
  database:keys.database
});

conn.connect(function(error){
  if(error){
    throw error;
  }
  console.log('connected');
});
return conn;
}
