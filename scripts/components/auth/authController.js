app.controller('AuthController', function (Auth, User, $scope, $location) {
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
		firebase.auth().signInWithPopup(provider)
			.then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				$location.path('/');
				$scope.$apply();
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				console.log(error);
			});
	}

	$scope.google = function () {
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase.auth().signInWithPopup(provider)
			.then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				$location.path('/');
				$scope.$apply();
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				console.log(error);
			});
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