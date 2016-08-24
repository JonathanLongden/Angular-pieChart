angular.module("waterShed", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "./templates/home.html", // or template: '<h1>Home Page</h1>' 
			controller: "simplePieCtrl"
		})
		.state("graph", {
			url: "/graph",
			templateUrl: "./templates/graph.html"
		})
 


 	$urlRouterProvider.otherwise("/");


});

