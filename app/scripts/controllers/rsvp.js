'use strict';

angular.module('jandkApp')
.controller('RsvpCtrl', function ($scope, $http) {

	$scope.step1 = 'step1';
	$scope.step2 = 'step2';
	$scope.step3 = 'step3';
	$scope.completion = 'completion';
	$scope.completed = 'completed';
	$scope.error = 'error';
	$scope.state = $scope.step1;
	$scope.rsvp = {'code':''};

	$scope.continueEnabled = false;
	$scope.continueBtn = angular.element(document.querySelector('.continue-btn'));

	$scope.getRsvp = function() {

		if (!$scope.continueEnabled) return;

		$http.get('/api/rsvps/'+$scope.rsvp.code.toUpperCase()).success(function(rsvp) {
			$scope.rsvp = rsvp;

			if ($scope.rsvp.isCompleted) {
				$scope.state = $scope.completed;
			} else {
				$scope.state = $scope.step2;
			}
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

		// format the rsvp model to an object and strip off _id
		var upsertData = $scope.rsvp;
		delete upsertData._id;
		upsertData.confirmed = true;

		// update record
		$http.put('/api/rsvps/'+$scope.rsvp.code, upsertData)
			.success(function(rsvp) {
				if ($scope.rsvp.email && $scope.rsvp.email !== '') $scope.sendConfirmEmail();
			})
			.error(function(data){
				$scope.state = $scope.error;
			});
	};

	$scope.sendConfirmEmail = function() {
		// on success, fire off confirmation
		$http.post('/api/email/'+$scope.rsvp.code);
	}

	$scope.checkForRsvpCode = function() {
		if ($scope.rsvp.code) {
			$scope.continueEnabled = true;
		} else {
			$scope.continueEnabled = false;
		}
	};

	$scope.backToStep1 = function() {
		// Reset to step 1
		$scope.rsvp = {'code':''};
		$scope.state = $scope.step1;
	}
});