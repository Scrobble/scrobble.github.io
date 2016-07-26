function GameAddDialogController ($scope, $mdDialog, $http, locals) {
	console.log(locals);

	$scope.steam = {
		user: '',
		uid: locals.user.uid
	};

	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.movie_list = null;

	$scope.continue = function() {
		$http.post(API_URL + 'steam', $scope.steam).then(function (data) {
			$mdDialog.cancel();
		}, function (error) {
			console.log(error);
		});
	};
}