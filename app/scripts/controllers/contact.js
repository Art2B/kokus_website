'use strict';

/**
 * @ngdoc function
 * @name kokusSiteApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the kokusSiteApp
 */
angular.module('kokusSiteApp')
  .controller('ContactCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://kokus-site.firebaseio.com/contact');
    $scope.state = '';
    $scope.sendState = '';

    $scope.sendMessage = function(message){
      message = message || {};
      if(Helpers.validateEmail(message.mail) && message !== undefined){
        var messageId = ref.push();
        messageId.set({
          mail: message.mail,
          message: message.content
        });
        $scope.message.mail = '';
        $scope.message.content = '';
        $scope.sendState = "Your message as been send :-)";
      } else {
        $scope.state = 'invalid';
        $scope.sendState = 'Your message is incompleted or invalid :-(';
      }
    }

  });
