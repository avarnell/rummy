var rummy = angular.module('rummy', ['ngRoute'])

.controller('homeCtrl', ['$scope', function($scope){
  $scope.working = 'giddy-up';

}])


.config(function ($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/game/:id', {
    templateUrl : '../partials/game.html',
    controller: 'gameCtrl'
  })
  $locationProvider.html5Mode(true);
}