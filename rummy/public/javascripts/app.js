var rummy = angular.module('rummy', ['ngRoute'])

.controller('homeCtrl', ['$scope', function($scope){
  $scope.working = 'giddy-up';

}])

.controller('gameCtrl', ['$scope','$http', function($scope, $http){
  $scope.working = 'True'

}])


.config(function ($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/game', {
    templateUrl : '../partials/game.html',
    controller: 'gameCtrl'
  })

  $locationProvider.html5Mode(true);
})