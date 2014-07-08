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

	$scope.gotoAnchor = function (elementId) {
		// set the location.hash to the id of the element you wish to scroll to.
		//$location.hash(anchor);
		//$anchorScroll();

		//$anchorSmoothScroll.scrollTo(anchor);
				
		var i;
		var startY = currentYPosition();
		var stopY = elmYPosition(elementId) - 100;
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			scrollTo(0, stopY); return;
		}
		var speed = Math.round(distance / 2);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for (i = startY; i < stopY; i += step) {
				setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for (i = startY; i > stopY; i -= step) {
			setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	
		/* currentYPosition -
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
		function currentYPosition() {
			// Firefox, Chrome, Opera, Safari
			if (window.pageYOffset) {
				return window.pageYOffset;
			}
			// Internet Explorer 6 - standards mode
			if (document.documentElement && document.documentElement.scrollTop) {
				return document.documentElement.scrollTop;
			}
			// Internet Explorer 6, 7 and 8
			if (document.body.scrollTop) {
				return document.body.scrollTop;
			}
			return 0;
		}

		/* scrollTo -
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
		function elmYPosition(elementId) {
			var elm = document.getElementById(elementId);
			var y = elm.offsetTop;
			var node = elm;
			while (node.offsetParent && node.offsetParent != document.body) {
				node = node.offsetParent;
				y += node.offsetTop;
			} return y;
		}
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
