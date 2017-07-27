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
        controller : "LearnController",
        controllerAs: 'learn'
    })
    .when("/archive", {
        templateUrl : "app/archive/archive.html",
        controller : "ArchiveController",
        controllerAs: 'archive'
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
    .when("/lab",{
        templateUrl : "app/lab/lab.html",
        controller : "LabController",
        controllerAs: 'lab'
    })
    .otherwise(({
     	redirectTo: '/'
 	}))
});