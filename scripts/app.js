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
		}).when('/auth/:type', {
			templateUrl: './scripts/components/auth/authView.html',
			controller: 'AuthDesktopController'
		}).when('/usuario', {
			templateUrl: './scripts/components/user/userView.html',
			controller: 'UserController',
			resolve: {
				"currentAuth": ["Auth", function(Auth) {
					return Auth.$requireSignIn();
				}]
			}
		});

		var config = {
			apiKey: "AIzaSyCrldvTirEEawF9vo_RbAaYf2OaGLiSZPM",
			authDomain: "scrooble-d7508.firebaseapp.com",
			databaseURL: "https://scrooble-d7508.firebaseio.com",
			storageBucket: "scrooble-d7508.appspot.com",
		};
		
		firebase.initializeApp(config);
	})
	.run(function ($rootScope, $location) {
		$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
			
		});

		$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
			if (error === "AUTH_REQUIRED") {
				$location.path("/");
			}
		});
	})