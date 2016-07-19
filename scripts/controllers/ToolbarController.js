app.controller('ToolbarController', function ($scope, $location) {
	$scope.signIn = function (ev) {
		$location.path('/entrar');
	}

	$scope.signUp = function (ev) {
		$location.path('/entrar');	
	}
});