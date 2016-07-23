app.controller('SignController', function ($scope, $http) {
	$scope.login = {
		email: '',
		password: ''
	};

	$scope.user = {
		name: '',
		email: '',
		password: ''
	};

	$scope.signUp = function () {
		$http.post(API_URL + 'users', $scope.user).then(function (data) {
			console.log(data);
		}, function (error) {
			console.log(error);
		});
	}
});