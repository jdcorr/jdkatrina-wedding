'use strict';

angular.module('jandkApp')
.controller('NavbarCtrl', function ($scope, $location, $anchorScroll) {
	$scope.mobileNavVisible = false;

	$scope.menu = [
		{
		  'title': 'About',
		  'link': 'about',
		  'class': 'about'
		},
		{
		  'title': 'Photos',
		  'link': 'photos',
		  'class': 'photos'
		},
		{
		  'title': 'The Proposal',
		  'link': 'proposal',
		  'class': 'proposal'
		},
		{
		  'title': 'The Wedding',
		  'link': 'wedding',
		  'class': 'wedding'
		},
		{
		  'title': 'Registry',
		  'link': 'registry',
		  'class': 'registry'
		},
		{
		  'title': 'RSVP',
		  'link': 'rsvp',
		  'class': 'rsvp'
		},
	];

	$scope.gotoAnchor = function (anchor) {
		// set the location.hash to the id of the element you wish to scroll to.
		$location.hash(anchor);
		$anchorScroll();
	};

	$scope.isActive = function(route) {
	  return route === $location.path();
	};

	$scope.toggleMobileNav = function() {
		if (!$scope.mobileNavVisible) {
			document.querySelector('.main-container').style.left = '150px';
			$scope.mobileNavVisible = true;
		} else {
			document.querySelector('.main-container').style.left = '0';
			$scope.mobileNavVisible = false;
		}
	};
});
