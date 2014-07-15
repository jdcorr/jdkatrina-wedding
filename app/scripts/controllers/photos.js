'use strict';

angular.module('jandkApp')
.controller('PhotosCtrl', function ($scope) {

	$scope.paddleLeft = angular.element(document.querySelector('.paddle-left'));
	$scope.paddleRight = angular.element(document.querySelector('.paddle-right'));
	$scope.slideshow = angular.element(document.querySelector('.slideshow'));
	$scope.slideshowContainer = angular.element(document.querySelector('.slideshow-container'));

	$scope.slides = [
		{image: 'images/slideshow/01.jpg'},
		{image: 'images/slideshow/02.jpg'},
		{image: 'images/slideshow/03.jpg'},
		{image: 'images/slideshow/04.jpg'},
		{image: 'images/slideshow/05.jpg'}
	];

	$scope.currentIndex = 0;

	$scope.setCurrentSlideIndex = function (index) {
		$scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
		$scope.currentIndex = index;
	};

	$scope.isCurrentSlideIndex = function (index) {
		return $scope.currentIndex === index;
	};

	$scope.prevSlide = function () {
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
		var adjWidth = $scope.slideshowContainer.width() * $scope.currentIndex;
		$scope.slideshow.css('left',-adjWidth+'px');
	};

	$scope.nextSlide = function () {
		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
		var adjWidth = $scope.slideshowContainer.width() * $scope.currentIndex;
		$scope.slideshow.css('left',-adjWidth+'px');
	};
});

