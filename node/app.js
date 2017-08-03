//Modules
	//Express
	var express = require('express');

	//BodyParser
	var bodyParser = require('body-parser');

	//Firebase
	var firebase = require("firebase");

//Config
	
	//Firebase
	var config = {	
		apiKey: "AIzaSyBJrBnCaGJiwnnd9ZSKkxgdOvziQ1oih5s",
		authDomain: "tr-angular.firebaseapp.com",
		databaseURL: "https://tr-angular.firebaseio.com",
		storageBucket: "tr-angular.appspot.com",
	};
	firebase.initializeApp(config);

//References
var app = express();
app.use(bodyParser());
var database = firebase.database();
var key = "kgb234xdfe";
database.ref('users/'+ key).set({
	username : 'admin',
	password : '2344.Enes'
});


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