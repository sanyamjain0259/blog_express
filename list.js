const connect = require('./connect');
conn=connect();

module.exports=function(request,response){
  var query='select * from blog;';
  conn.query(query,function(error,result){
    if(error) throw error;
    response.render('index.pug',{blog:result});
  });   
};
