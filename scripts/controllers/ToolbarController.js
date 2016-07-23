app.controller('ToolbarController', function ($rootScope, $scope, $location) {
	var transparentToolbar = [ '/entrar' ];

	$scope.signIn = function (ev) {
		$location.path('/entrar');
	}

	$scope.signUp = function (ev) {
		$location.path('/entrar');	
	}

	$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		if (transparentToolbar.indexOf($location.path()) >= 0) {
			$scope.transparent = true;
		} else {
			$scope.transparent = false;
		}
	});
});