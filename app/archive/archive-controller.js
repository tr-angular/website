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
				listTitle : "Kontroller",
				subList : [{
						subListTitle : "Nedir ?"
					},{
						subListTitle : "Neler Yapılır ?"
					},{
						subListTitle : "Neden Öğrenmeliyim ?"
					}]
			},{
				listTitle : "Servisler"
			},{
				listTitle : "Kapsam ($scope)"
			},{
				listTitle : "Direktivler"
			},{
				listTitle : "Modüller"
			},{
				listTitle : "Yönlendirci",
				subList : [{
						subListTitle : "Nedir ?"
					},{
						subListTitle : "Neler Yapılır ?"
					},{
						subListTitle : "Neden Öğrenmeliyim ?"
					}]
			}
		];

		vm.list = list;
	}

}