app.controller('ToolbarController', function ($rootScope, $scope, $location, User) {
	var transparentToolbar = [ '/entrar' ];

	User.getUser(function (user) {
		if (user) {
			$scope.user = user;

			$scope.logged = true;
		} else {
			$scope.logged = false;
		}
	});

	$scope.home = function () {
		$location.path('/');
	}

	$scope.profile = function () {
		$location.path('/usuario');
	}

	$scope.signIn = function () {
		$location.path('/entrar');
	}

	$scope.loggout = function () {
		firebase.auth().signOut().then(function() {
			$location.path('/');
		}, function(error) {
			console.log(error);
		});
	}

	$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		if (transparentToolbar.indexOf($location.path()) >= 0) {
			$scope.transparent = true;
		} else {
			$scope.transparent = false;
		}
	});
});