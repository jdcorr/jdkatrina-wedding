'use strict';

angular.module('jandkApp')
.controller('GuestlistCtrl', function ($scope, $http) {

	$scope.confirmedRsvps = [];
	$scope.declinedRsvps = [];
	$scope.totalConfirmedAdults = 0;
	$scope.totalConfirmedChildren = 0;
	$scope.totalConfirmedInfants = 0;
	$scope.totalInvitees = 0;

	$scope.getConfirmedRsvps = function() {
		$http.get('/api/rsvps/confirmed').success(function(rsvps) {
			$scope.confirmedRsvps = rsvps;

			for (var i=0; i<rsvps.length; i++) {
				$scope.totalConfirmedAdults += $scope.confirmedRsvps[i].totalAdults;
				$scope.totalConfirmedChildren += $scope.confirmedRsvps[i].totalChildren;
				$scope.totalConfirmedInfants += $scope.confirmedRsvps[i].totalInfants;
			}; 

			$scope.totalInvitees += rsvps.length;
		});
	};

	$scope.getDeclinedRsvps = function() {
		$http.get('/api/rsvps/declined').success(function(rsvps) {
			$scope.declinedRsvps = rsvps;
			$scope.totalInvitees += rsvps.length;
		});
	};

	$scope.getConfirmedRsvps();
	$scope.getDeclinedRsvps();
});