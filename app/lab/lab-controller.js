app.controller('LabController',LabController);

function LabController(){
	var vm = this;
	vm.init = init;


	function init(){
		var course = [
			{
				courseName : "Angular Js' nin Temelleri",
				courseDesc : "Bu bölümde, Angulas Js'nin temel yapıları hakkında, incelemeler yapacağız.",
				authorsName : "Enes Karademir",
				authorsAvatar : "assets/images/eneskarademir.png",
				courseWatch : "10067",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting",
			},{
				courseName : "Model, Controller İlişkisi",
				courseDesc : "Bu bölümde, Angulas Js'nin en önemli yapıtaşlarından olan model ve controller' a ...",
				authorsName : "Enes Karademir",
				authorsAvatar : "assets/images/eneskarademir.png",
				courseWatch : "8587",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			},{
				courseName : "Angular Js' de Direktivler",
				courseDesc : "Bu bölümde, Angulas Js'de DOM manüpülasyonları için işimizi kolaylaştıran ...",
				authorsName : "Enes Karademir",
				authorsAvatar : "assets/images/eneskarademir.png",
				courseWatch : "4387",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			},{
				courseName : "Bir Angular Projesinin Klasör Yapısı",
				courseDesc : "Bu bölümde, Angular' da bir proje geliştirirken klasör yapısının nasıl inşaa edileceğine ...",
				authorsName : "Enes Karademir",
				authorsAvatar : "assets/images/eneskarademir.png",
				courseWatch : "4387",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			},{
				courseName : "Angular' da Servisler",
				courseDesc : "Bu bölümde, Angular' ın default gelen servislerine bakacağız, servisler angular' ın ...",
				authorsName : "Gökhan Birdal",
				authorsAvatar : "assets/images/gokhanbirdal.png",
				courseWatch : "4387",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			},{
				courseName : "Angular' da Servisler",
				courseDesc : "Bu bölümde, Angular' ın default gelen servislerine bakacağız, servisler angular' ın ...",
				authorsName : "Gökhan Birdal",
				authorsAvatar : "assets/images/gokhanbirdal.png",
				courseWatch : "4387",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			},{
				courseName : "Angular' da Servisler",
				courseDesc : "Bu bölümde, Angular' ın default gelen servislerine bakacağız, servisler angular' ın ...",
				authorsName : "Gökhan Birdal",
				authorsAvatar : "assets/images/gokhanbirdal.png",
				courseWatch : "4387",
				courseUrl : "https://egghead.io/lessons/build-and-deploy-your-angular-app-to-firebase-hosting"
			}
		];

		vm.courses = course;
	}

}