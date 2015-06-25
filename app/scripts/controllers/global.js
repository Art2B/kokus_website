'use strict';

/**
 * @ngdoc function
 * @name kokusSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kokusSiteApp
 */
angular.module('kokusSiteApp')
.controller('GlobalCtrl', function ($scope, $location) {
  $scope.year = new Date().getFullYear();
  $scope.bodyClass = $location.path().substr(1);
});
