'use strict';

/**
 * @ngdoc function
 * @name kokusSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kokusSiteApp
 */
angular.module('kokusSiteApp')
.controller('MainCtrl', function ($scope) {
  $scope.registerMail = function(mail){
    if(Helpers.validateEmail(mail)){
      console.log(mail);
    } else {
      console.log('pas bon :)');
    }
  }

});
