'use strict';

angular.module('jandkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      /*.when('/about', {
        window.scrollTo('#about')
      })      
      .when('/proposal', {
        window.scrollTo('#proposal')
      })
      .when('/photos', {
        window.scrollTo('#photos')
      })
      .when('/wedding', {
        window.scrollTo('#wedding')
      })
      .when('/registry', {
        window.scrollTo('#registry')
      })
      .when('/rsvp', {
        window.scrollTo('#rsvp')
      })*/
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });