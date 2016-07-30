function BookAddDialogController ($scope, $mdDialog, $http, locals) {
	console.log(locals);

	$scope.books = {
		user: '',
		uid: locals.user.uid
	};

	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.continue = function() {
		
	};

	$scope.goodreads = function(ev) {
		$http.post(API_URL + 'goodreads', $scope.filmow).then(function (data) {
			$mdDialog.cancel();
		}, function (error) {
			console.log(error);
		});
	};
}