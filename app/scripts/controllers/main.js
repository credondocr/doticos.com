'use strict';

/**
 * @ngdoc function
 * @name doticoscomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doticoscomApp
 */
angular.module('doticoscomApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: 'https://doticos.herokuapp.com/players'
    }).then(function successCallback(response) {
      $scope.players = [];
      response.data.map(function (item) {
        $http({
          method: 'GET',
          url: 'https://doticos.herokuapp.com/accountInfo/' + item.steam_base_64_id
        }).then(function successCallback(data){
          $scope.players.push(data.data.response.players[0]);
        });

      });
      console.log(response.data);

      $scope.list =response.data;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
