app.controller('UserController', function ($scope, $mdDialog, currentAuth) {
	console.log(currentAuth);

	$scope.user = currentAuth;

	$scope.movies = function (ev) {
		$mdDialog.show({
				controller: MovieAddDialogController,
				templateUrl: './scripts/components/movie/movieAddDialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				locals: {
					user: currentAuth
				}
			})
			.then(function() {
				
			}, function() {
				
			});
	}

	$scope.games = function (ev) {
		$mdDialog.show({
				controller: GameAddDialogController,
				templateUrl: './scripts/components/game/gameAddDialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				locals: {
					user: currentAuth
				}
			})
			.then(function() {
				
			}, function() {
				
			});
	}
});