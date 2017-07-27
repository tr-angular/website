var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

app.post('/test',function (req,res) {
	var username = req.body.username;
	var password = req.body.password;

	if( username == 'enes' && password == '2344.Enes'){

		var login = {
			messege : '#trangular',
			signupTime: 365,
			username : username,
			password : password
		};

		res.send(JSON.stringify(login));
	}else{
		var error = {
			messege : 'Kullanıcı Bulunamadı'
		}
		res.send(JSON.stringify(error));
	}	
})

app.listen(8080, function(){
	console.log('Node Runnging.');
})