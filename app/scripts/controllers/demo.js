'use strict';

/**
 * @ngdoc function
 * @name kokusSiteApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the kokusSiteApp
 */
angular.module('kokusSiteApp')
.controller('DemoCtrl', function ($scope) {
  $scope.instance = new Kokus({idContainer: "demo"});
  console.log($scope.instance);

  $scope.addTree = function(){
    new Kokus.Tree({x: Helpers.getRandomInt(0,360), y: Helpers.getRandomInt(0,360), z: Helpers.getRandomInt(0,360)}, {}, $scope.instance);
  };
  $scope.addHouse = function(){
    new Kokus.House({x: Helpers.getRandomInt(0,360), y: Helpers.getRandomInt(0,360), z: Helpers.getRandomInt(0,360)}, {}, $scope.instance);
  };
  $scope.addMountain = function(){
    new Kokus.Mountain({x: Helpers.getRandomInt(0,360), y: Helpers.getRandomInt(0,360), z: Helpers.getRandomInt(0,360)}, {}, $scope.instance);
  };
  $scope.destroyWorld = function(){
    $scope.instance.reset();
  }
});
