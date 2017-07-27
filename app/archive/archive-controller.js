app.controller('ArchiveController',ArchiveController);

function ArchiveController(){
	var vm = this;
	vm.init = init;


	function init(){
		var list = [
			{
				listTitle: "Başlarken",
			},
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
				listTitle : "Data Binding"
			},{
				listTitle : "Controller",
				subList : [{
						subListTitle : "Nedir ?"
					},{
						subListTitle : "Neler Yapılır ?"
					},{
						subListTitle : "Neden Öğrenmeliyim ?"
					}]
			},{
				listTitle : "Services"
			},{
				listTitle : "$scope"
			},{
				listTitle : "Directive"
			},{
				listTitle : "Module"
			},{
				listTitle : "Router",
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