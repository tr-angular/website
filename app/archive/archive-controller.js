app.controller('ArchiveController',ArchiveController);

function ArchiveController(){
	var vm = this;
	vm.init = init;


	function init(){
		var list = [
			{
				listTitle : "Angular Js",
				subList : [{
						subListTitle : "Nedir ?"
					},{
						subListTitle : "Neler Yapılır ?"
					},{
						subListTitle : "Neden Öğrenmeliyim ?"
					}]
			},{
				listTitle : "Kavramlara Genel Bakış"
			},{
				listTitle : "Veri Bağlama"
			},{
				listTitle : "Kontroller"
			},{
				listTitle : "Servisler"
			},{
				listTitle : "Kapsam ($scope)"
			},{
				listTitle : "Direktivler"
			},{
				listTitle : "Modüller"
			},{
				listTitle : "Yönlendirci"
			}
		];

		vm.list = list;
	}

}