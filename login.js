const connect = require('./connect');
var conn=connect();

module.exports=function(request,response){

var username=request.body.uname;
  var password=request.body.pass;

  console.log(username);
  console.log(password);

  var query = 'select * from login where username = \''+username+'\'and password = \''+ password+'\'';
  conn.query(query,function(error,result){
    if(error) throw error;
    if(result[0]){
      response.cookie('user',username);
      response.redirect('/dashboard');
    }
    else{
      response.redirect('/admin');
    }
  })
};
