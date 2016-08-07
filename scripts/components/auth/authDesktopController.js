app.controller('AuthDesktopController', function (Auth, User, $scope, $location) {
	$scope.login = {
		email: '',
		password: ''
	};

	$scope.user = {
		name: '',
		email: '',
		password: ''
	};

	$scope.facebook = function () {
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('public_profile,email');
		firebase.auth().signInWithRedirect(provider);
	}

	$scope.google = function () {
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase.auth().signInWithRedirect(provider);
	}

	$scope.signUp = function () {
		firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
			.then(function (user) {
				user.updateProfile({
					displayName: $scope.user.name
				});

				$location.path('/');
				$scope.$apply();
			}).catch(function (error) {
				console.log(error);
			});
	}

	$scope.signIn = function () {
		firebase.auth().signInWithEmailAndPassword($scope.login.email, $scope.login.password)
			.then(function (user) {
				$location.path('/');
				$scope.$apply();
			}).catch(function(error) {
				console.log(error);
			});
	}
})