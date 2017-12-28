var express = require('express');
var app = express();
var mysql = require('mysql');

app.use(function (req,res,next) {
	console.log('Time %d', Date.now());
	next();
});

//register new user
app.post('/api/v1/user/add',function (req,res)) {

};

app.post('/api/v1/user/login', function (req,res){

});

app.listen(3000);
