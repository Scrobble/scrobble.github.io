app.factory('User', function () {
	function getUser(callback) {
		firebase.auth().onAuthStateChanged(function(user) {
			callback(user);
		});
	}

	return {
		getUser: getUser
	}
})