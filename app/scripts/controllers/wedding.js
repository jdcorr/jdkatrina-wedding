'use strict';

angular.module('jandkApp')
.controller('WeddingCtrl', function ($scope) {
	$scope.map = {
		center: {
			latitude: 36.619632,
			longitude: -121.937346
		},
		zoom: 15,
		draggable: 'true',
		options:{
			scrollwheel:false
		}
	};

	$scope.ceremonyWindow = {
		content: '<div><h2>Ceremony</h2><p>4:30pm sharp</p></div>',
		point: {
			latitude: 36.619632,
			longitude: -130.937346
		},
		show:true
	};

	$scope.receptionWindow = {
		content: '<div><h2>Reception</h2><p>Immediately following the ceremony</p></div>',
		point: {
			latitude: 36.619632,
			longitude: -121.937346
		},
		show:true
	};
});