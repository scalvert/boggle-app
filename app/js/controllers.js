'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('BoggleCtrl', [function($scope) {
    $scope.boggleLetters = new BoardGenerator().generate();
  }]);