'use strict';

/**
 * @ngdoc overview
 * @name kokusSiteApp
 * @description
 * # kokusSiteApp
 *
 * Main module of the application.
 */
angular
  .module('kokusSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/live', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl'
      })
      .when('/legal', {
        templateUrl: 'views/legalmentions.html',
        controller: 'LegalmentionsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
