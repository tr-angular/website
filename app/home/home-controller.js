app.controller('HomeController',HomeController);

function HomeController($http){
	var vm = this;
	vm.userList = userList;


	function userList(){
		var data = {
			username : 'enes',
			password: '2344.Enes'
		};

		$http({
			method:'POST',
			url:'http://localhost:8080/test',
			data : data,
			headers:{'Content-Type' : 'application/json'}
		}).then(function (reponse) {
			vm.title = reponse.data.messege;
			console.log(reponse.data);
		});
	}

}