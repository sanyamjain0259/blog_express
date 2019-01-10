const express = require('express');
const routes = require('./routes/routes');
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser');

var app=express();

app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));
routes(app);
var PORT=process.env.PORT||8080;
app.listen(PORT);
