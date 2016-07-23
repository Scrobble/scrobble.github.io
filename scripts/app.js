var API_URL = 'http://localhost:3000/api/';
var FB_URL = 'https://scrooble-d7508.firebaseio.com/';

var app = angular.module('Scrobble', ['ngMaterial', 'ngRoute', 'ngMessages', 'firebase', 'angular-md5'])
	.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
		$mdThemingProvider.theme('default').primaryPalette('grey').accentPalette('orange');

		$routeProvider.when('/', {
			templateUrl: './scripts/components/home/homeView.html',
			controller: 'HomeController'
		}).when('/entrar', {
			templateUrl: './scripts/components/auth/authView.html',
			controller: 'AuthController'
		});

		var config = {
			apiKey: "AIzaSyCrldvTirEEawF9vo_RbAaYf2OaGLiSZPM",
			authDomain: "scrooble-d7508.firebaseapp.com",
			databaseURL: "https://scrooble-d7508.firebaseio.com",
			storageBucket: "scrooble-d7508.appspot.com",
		};
		
		firebase.initializeApp(config);
	})
	.run(function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
			
		});
	})