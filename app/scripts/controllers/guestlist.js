'use strict';

angular.module('jandkApp')
.controller('GuestlistCtrl', function ($scope, $http) {

	$scope.confirmedRsvps = [];
	$scope.declinedRsvps = [];

	$scope.getConfirmedRsvps = function() {
		$http.get('/api/rsvps/confirmed').success(function(rsvps) {
			$scope.confirmedRsvps = rsvps;
		});
	};

	$scope.getDeclinedRsvps = function() {
		$http.get('/api/rsvps/declined').success(function(rsvps) {
			$scope.declinedRsvps = rsvps;
		});
	};

	$scope.getConfirmedRsvps();
	$scope.getDeclinedRsvps();
});