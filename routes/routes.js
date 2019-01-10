var loginapp=require('../login');
const blog_write = require('../blog_write');
const bodyparser = require('body-parser');
const list = require('../list');
const article = require('../article');

module.exports=function(app){


app.get('/',function(request,response){
   list(request,response);
});


app.use('/:id',function(request,response,next){
  console.log(request.params.id);
  next();
})
app.get('/:id',function(request,response){

  if(request.params.id=='admin'){
   var user=request.cookies.user;
    if(user){
    response.redirect('dashboard',{user : user});
  }
  else{
    response.render('login.pug',{});
  }}

   if(request.params.id=='dashboard'){
     var user=request.cookies.user;
     if(user){
     response.render('dashboard.pug',{user : user});
   }
   else{
     response.redirect('/admin');
   }
 }
  if(request.params.id=='login'){
        response.send('login');
      }

if(request.params.id=='signout'){
  response.clearCookie('user');
  response.redirect('/dashboard');
}

});
app.post('/admin',function(request,response){
  loginapp(request,response);
});
app.post('/post',function(request,response){
  blog_write(request,response);
});
app.get('/read/:title/:id',function(request,response){
  article(request,response);
})
}
