app.controller('ToolbarController', function ($scope, $mdDialog) {
	$scope.signIn = function (ev) {
		$mdDialog.show({
			controller: DialogSignController,
			templateUrl: '../../views/dialog_sign.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	}

	$scope.signUp = function (ev) {
		$mdDialog.show({
			controller: DialogSignController,
			templateUrl: 'dialog1.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: useFullScreen
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	}
});