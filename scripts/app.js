var app = angular.module('Scrobble', ['ngMaterial', 'ngRoute']);
app.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
	$mdThemingProvider.theme('default').primaryPalette('grey').accentPalette('orange');

	$routeProvider.when('/', {
		templateUrl: '../views/home.html',
		controller: 'MainController'
	});
});