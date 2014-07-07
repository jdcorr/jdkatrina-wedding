'use strict';

angular.module('jandkApp')
.controller('RsvpCtrl', function ($scope, $http) {

	$scope.step1 = 'step1';
	$scope.step2 = 'step2';
	$scope.step3 = 'step3';
	$scope.completion = 'completion';
	$scope.state = $scope.step1;
	$scope.rsvp = {'code':''};

	$scope.continueEnabled = false;
	$scope.continueBtn = angular.element(document.querySelector('.continue-btn'));

	$scope.getRsvp = function() {

		if (!$scope.continueEnabled) return;

		console.log('getting rsvp for id: ' + $scope.rsvp.code.toUpperCase());

		$http.get('/api/rsvps/'+$scope.rsvp.code.toUpperCase()).success(function(rsvp) {
			console.log(rsvp);
			$scope.rsvp = rsvp;
			$scope.state = $scope.step2;
		});
	};

	$scope.showPreSubmit = function() {
		$scope.state = $scope.step3;
	};

	$scope.backToInfo = function() {
		$scope.state = $scope.step2;
	};

	$scope.showCompletion = function() {
		$scope.state = $scope.completion;

		// update record
		$http.put('/api/rsvps/'+$scope.rsvp._id).success(function(rsvp) {
			// fire off confirmation
			$http.get('/api/email/'+$scope.rsvp.code);
		});

	};

	$scope.checkForRsvpCode = function() {
		console.log($scope.rsvp.code);
		if ($scope.rsvp.code) {
			console.log($scope.rsvp.code);
			$scope.continueEnabled = true;
		} else {
			$scope.continueEnabled = false;
		}
	};
});