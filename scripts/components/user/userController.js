app.controller('UserController', function ($scope, currentAuth) {
	console.log(currentAuth);

	$scope.user = currentAuth;
});