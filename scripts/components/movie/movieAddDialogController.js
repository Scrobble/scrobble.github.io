function MovieAddDialogController ($scope, $mdDialog, $http, locals) {
	console.log(locals);

	$scope.filmow = {
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
		$http.post(API_URL + 'filmow', $scope.filmow).then(function (data) {
			$mdDialog.cancel();
		}, function (error) {
			console.log(error);
		});
	};
}