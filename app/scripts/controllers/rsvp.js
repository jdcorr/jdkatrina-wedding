'use strict';

angular.module('jandkApp')
.controller('RsvpCtrl', function ($scope, $http) {

	$scope.step1 = 'step1';
	$scope.step2 = 'step2';
	$scope.step3 = 'step3';
	$scope.completion = 'completion';
	$scope.state = $scope.step1;

	$scope.rsvpCode = 'jd123';
	$scope.continueDisabled = true;
	$scope.continueBtn = angular.element(document.querySelector('.continue-btn'));

	$scope.getRsvp = function() {
		$scope.state = $scope.step2;

		console.log($scope.rsvpCode);

		$http.get('/api/rsvps/'+$scope.rsvpCode).success(function(rsvp) {
			$scope.rsvp = rsvp;
		});
	};

	$scope.showPreSubmit = function() {
		$scope.state = $scope.step3;
	};

	$scope.backToInfo = function() {
		$scope.state = $scope.step2;
	};

	$scope.checkForRsvpCode = function() {
		if ($scope.rsvpCode) {
			$scope.continueDisabled = false;
		} else {
			$scope.continueDisabled = true;
		}
	};
});