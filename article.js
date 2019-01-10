var connect = require('./connect');
var conn=connect();

module.exports=function(request,response){
  var bid=request.params.id;
  var query='select * from blog where bid='+bid;
  conn.query(query,function(error,result){
    if(error) throw error;
    response.render('article.ejs',{data:result[0]});
  });
};
