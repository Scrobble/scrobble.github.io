app.controller('BodyController', function ($rootScope, $scope, $location) {
	var bodyBackground = [ '/entrar' ];
	var bodyImage = {
		'/entrar': 'game-of-thrones-bg'
	}

	$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		if (bodyBackground.indexOf($location.path()) >= 0) {
			$scope.class = bodyImage[$location.path()];
		} else {
			$scope.class = '';
		}
	});
});