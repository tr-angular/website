app.controller('HomeController',HomeController);
app.filter('firstLetter', firstLetter);

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

app.directive('prism', function() {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
});

function firstLetter(){
	return 'enes';
}