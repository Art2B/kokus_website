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
  $scope.showHeader = false;

  $scope.$on('$routeChangeStart', function(next, current) { 
    $scope.bodyClass = $location.path().substr(1);
    if($location.path().substr(1) != ''){
      $scope.showHeader = true;
    } else {
      $scope.showHeader = false;
    }
  });
});
