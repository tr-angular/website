var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/home/home.html",
        controller : "HomeController",
        controllerAs: 'home'
    })
    .when("/learn", {
        templateUrl : "app/learn/learn.html",
        controller : "HomeController",
        controllerAs: 'home'
    })
    .when("/archive", {
        templateUrl : "app/archive/archive.html",
        controller : "HomeController",
        controllerAs: 'home'
    })
    .when("/register", {
        templateUrl : "app/register/register.html",
        controller : "RegisterController",
        controllerAs: 'register'
    })
    .when("/login", {
        templateUrl : "app/login/login.html",
        controller : "HomeController",
        controllerAs: 'home'
    })
    .otherwise(({
     	redirectTo: '/'
 	}))
});