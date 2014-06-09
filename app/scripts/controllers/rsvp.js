'use strict';

angular.module('jandkApp')
.controller('RsvpCtrl', function ($scope, $http) {

	$scope.rsvpCode = '';
	$scope.continueDisabled = true;
	$scope.continueBtn = angular.element(document.querySelector('.continue-btn'));

	$scope.retrieveRsvp = function() {
		$http.get('/api/rsvps/'+$scope.rsvpCode).success(function(rsvp) {
			$scope.rsvp = rsvp;
		});
	};

	$scope.checkForRsvpCode = function() {
		if ($scope.rsvpCode) {
			$scope.continueDisabled = false;
		} else {
			$scope.continueDisabled = true;
		}
	};
});