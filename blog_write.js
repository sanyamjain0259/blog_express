const connect = require('./connect');
var conn=connect();
module.exports=function(request,response){
 var title=request.body.title;
 var article=request.body.article;
 console.log(title);
 console.log(article);
 var query='select max(bid) as counter from blog';
 conn.query(query,function(error,result){
   if(error) throw error;
   var counter=result[0].counter+1;
   var query='insert into blog (bid,title,article) values ?;';
   var value=[[counter,title,article]]
   conn.query(query,[value],function(error,result){
    if(error) throw error;
    response.redirect('/dashboard');
   });

 });
};
