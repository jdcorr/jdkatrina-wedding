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
});