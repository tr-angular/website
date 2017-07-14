app.controller('RegisterController',RegisterController);

function RegisterController($http){
	var vm = this;
	vm.sign = sign;

	function sign(){
		var getRegister = {};

		getRegister.name = vm.name;
		getRegister.surname = vm.surname;
		getRegister.email = vm.email;
		getRegister.password = vm.password;
		getRegister.passwordR = vm.passwordR;

		console.log(getRegister);
	}

}