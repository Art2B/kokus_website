'use strict';

/**
 * @ngdoc function
 * @name kokusSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kokusSiteApp
 */
angular.module('kokusSiteApp')
.controller('MainCtrl', function ($scope, $firebase) {
  var ref = new Firebase('https://kokus-site.firebaseio.com/registration');

  $scope.state = '';
  $scope.instance = new Kokus({idContainer: "kokus-holder"});

  $scope.registerMail = function(mail){
    if(Helpers.validateEmail(mail)){
      var mailId = ref.push();
      mailId.set({
        mail: mail,
        date: new Date()
      });
    } else {
      $scope.state = 'invalid';
    }
  };

});